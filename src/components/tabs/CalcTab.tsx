'use client'

import { useMemo, useState } from 'react'
import { combos, flatTickets } from '@/data'
import { ROOMS } from '@/data/rooms'
import { useCopy } from '@/lib/clipboard'
import { calcDigits, calcNum, grp, money } from '@/lib/format'
import { computeQuoteCart, ticketRates, type CalcState, type CartLine, type ComboLine, type LeLine, type RoomLine, type TicketLine } from '@/lib/quote'

const initialCalc: CalcState = {
  ticket: -1,
  adult: '2',
  child: '0',
  senior: '0',
  room: '',
  other: '',
  nightsWd: '2',
  nightsWe: '0',
  comboPick: '0',
  comboPrice: '',
  leName: '',
  lines: [],
  nextId: 1,
}

const inputStyle = { border: '1px solid #D9DCE6', borderRadius: '10px', padding: '12px', fontFamily: "'Be Vietnam Pro',sans-serif", fontSize: '14px', color: '#2C2F3A', minHeight: '44px' }
const addActionBtn = { border: '1px solid #4FB3A6', background: '#fff', color: '#1E6B5E', borderRadius: '10px', padding: '12px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '500', cursor: 'pointer', minHeight: '44px', whiteSpace: 'nowrap' }
const stepBtn = { border: '1px solid #D9DCE6', background: '#fff', borderRadius: '8px', width: '34px', height: '34px', cursor: 'pointer', fontSize: '16px' }

export default function CalcTab() {
  const [calc, setCalc] = useState<CalcState>(initialCalc)
  const { copy, copyBtn } = useCopy()

  const patch = (partial: Partial<CalcState>) => setCalc((c) => ({ ...c, ...partial }))

  type NewCartLine = Omit<TicketLine, 'id'> | Omit<RoomLine, 'id'> | Omit<ComboLine, 'id'> | Omit<LeLine, 'id'>

  const addCartLine = (line: NewCartLine) =>
    setCalc((c) => {
      const id = c.nextId || 1
      return { ...c, nextId: id + 1, lines: [...(c.lines || []), { ...line, id } as CartLine] }
    })

  const removeCartLine = (id: number) => patch({ lines: (calc.lines || []).filter((ln) => ln.id !== id) })

  const bumpCartLine = (id: number, field: 'adult' | 'child' | 'senior' | 'qty', delta: number) =>
    patch({
      lines: (calc.lines || []).map((ln) => {
        if (ln.id !== id) return ln
        const n = Math.max(0, calcNum((ln as unknown as Record<string, string>)[field]) + delta)
        return { ...ln, [field]: n === 0 ? '0' : String(n) }
      }),
    })

  const addTicketLine = () => {
    if (!(calc.ticket >= 0)) return
    addCartLine({ kind: 'ticket', ticket: calc.ticket, adult: calc.adult || '0', child: calc.child || '0', senior: calc.senior || '0' })
  }

  const addRoomLine = (roomId: number) => {
    let wd = calcNum(calc.nightsWd)
    let we = calcNum(calc.nightsWe)
    if (wd + we === 0) wd = 1
    addCartLine({ kind: 'room', roomId, qty: '1', nightsWd: String(wd), nightsWe: String(we) })
  }

  const addComboLine = () => {
    const amount = calcDigits(calc.comboPrice)
    if (!amount) return
    addCartLine({
      kind: 'combo',
      comboIdx: calcNum(calc.comboPick),
      amount,
      qty: '1',
      pax: String(calcNum(calc.adult) + calcNum(calc.child) + calcNum(calc.senior) || 1),
    })
  }

  const addLeLine = () => {
    const amount = calcDigits(calc.other)
    if (!amount) return
    const name = String(calc.leName || '').trim() || 'Dịch vụ lẻ'
    const id = calc.nextId || 1
    patch({ other: '', leName: '', nextId: id + 1, lines: [...(calc.lines || []), { id, kind: 'le', name, amount, qty: '1' }] })
  }

  const setField = (k: keyof CalcState, max: number) => (e: React.FormEvent) => {
    const raw = (e.target as HTMLInputElement).value
    const d = k === 'leName' ? String(raw).slice(0, 80) : calcDigits(raw).slice(0, max).replace(/^0+(?=\d)/, '')
    patch({ [k]: d } as Partial<CalcState>)
  }

  const cq = useMemo(() => computeQuoteCart(calc, flatTickets, combos), [calc])
  const t = calc.ticket >= 0 && flatTickets[calc.ticket] ? flatTickets[calc.ticket] : null
  const hasChildRate = !!(t && ticketRates(t).hasChildRate)

  const ticketOptions = flatTickets.map((r, i) => ({
    value: String(i),
    label: r.name.replace(/\n/g, ' ').slice(0, 70) + ' — ' + money(r.adult),
  }))
  const comboPickOptions = combos.map((x, i) => ({
    value: String(i),
    label: ((x.desc || '').split('\n')[0] || x.sheet || 'Combo').slice(0, 70),
  }))

  const { nAdult, nChild, nSenior, nGuests, ppReady } = cq
  const guestsParts: string[] = []
  if (nAdult > 0) guestsParts.push(nAdult + ' người lớn')
  if (nChild > 0) guestsParts.push(nChild + ' trẻ em')
  if (nSenior > 0) guestsParts.push(nSenior + ' người cao tuổi')
  const guestsLabel = guestsParts.length ? guestsParts.join(' + ') : '0 khách'
  const svcBits = cq.lineOut.map((ln) => ln.title)
  if (cq.extraRoom > 0) svcBits.push('phòng ngoài bảng')
  const svcLabel = svcBits.length ? svcBits.join('; ') : 'phòng và dịch vụ theo phương án đã trao đổi'

  const quoteLines = ['BÁO GIÁ THAM KHẢO', 'Số khách: ' + guestsLabel]
  cq.lineOut.forEach((ln) => {
    if (ln.kind === 'ticket') {
      const parts: string[] = []
      if (ln.nA! > 0) parts.push(ln.nA + ' người lớn x ' + money(ln.rates!.adult))
      if (ln.nC! > 0) parts.push(ln.nC + ' trẻ em x ' + money(ln.rates!.child))
      if (ln.nS! > 0) parts.push(ln.nS + ' cao tuổi x ' + money(ln.rates!.senior))
      quoteLines.push('- Vé lẻ: ' + ln.title)
      quoteLines.push('  ' + (parts.length ? parts.join(' + ') + ' = ' : '') + money(ln.amt))
    } else if (ln.kind === 'room') {
      quoteLines.push('- Phòng: ' + ln.title + ' × ' + ln.qty + ' · ' + ln.wd + ' đêm ngày thường + ' + ln.we + ' đêm cuối tuần = ' + money(ln.amt))
    } else if (ln.kind === 'combo') {
      quoteLines.push('- Combo: ' + ln.title + (ln.qty! > 1 ? ' × ' + ln.qty : '') + ' = ' + money(ln.amt))
    } else {
      quoteLines.push('- Dịch vụ lẻ: ' + ln.title + (ln.qty! > 1 ? ' × ' + ln.qty : '') + ' = ' + money(ln.amt))
    }
  })
  if (cq.extraRoom > 0) quoteLines.push('- Phòng ngoài bảng: ' + money(cq.extraRoom))
  quoteLines.push('Vé lẻ: ' + money(cq.ticketTotal))
  quoteLines.push('Phòng: ' + money(cq.roomAmt))
  quoteLines.push('Combo: ' + money(cq.comboAmt))
  quoteLines.push('Dịch vụ lẻ: ' + money(cq.otherAmt))
  quoteLines.push('Tổng giá: ' + money(cq.total))
  quoteLines.push('Cọc 30%: ' + money(cq.dep))
  quoteLines.push('Còn lại: ' + money(cq.remain))
  if (cq.overlap) quoteLines.push('Lưu ý: combo thường đã gồm phòng/vé — kiểm tra không cộng trùng.')
  const quoteText = quoteLines.join('\n')

  const msgTongText =
    'Dạ em gửi anh/chị phương án và giá tham khảo ạ:\n• Dịch vụ: ' + svcLabel +
    '\n• Số khách: ' + guestsLabel +
    '\n• Tổng booking: ' + money(cq.total) +
    '\n• Cọc 30%: ' + money(cq.dep) + ' — chuyển trước để giữ chỗ và giữ giá' +
    '\n• Còn lại: ' + money(cq.remain) + ' thanh toán tại quầy khi nhận phòng' +
    '\nGiá hiệu lực trong hôm nay và có thể thay đổi theo tình trạng chỗ. Anh/chị xem phương án và phản hồi giúp em nhé ạ.'

  const ppLines: string[] = []
  if (ppReady) {
    ppLines.push('Dạ em chia phần phòng/combo/dịch vụ lẻ đều theo đầu người, cộng thêm giá vé lẻ theo từng đối tượng ạ:')
    if (cq.sharedAmt > 0) ppLines.push('• Phần chia đều: ' + money(cq.sharedAmt) + ' ÷ ' + nGuests + ' khách = ' + money(cq.roomPP) + '/khách (cả kỳ)')
    if (nAdult > 0) ppLines.push('• Giá người lớn: ' + money(cq.adultPP) + '/khách' + (cq.ticketAdultRate ? ' (chia đều ' + money(cq.roomPP) + ' + vé lẻ ' + money(cq.ticketAdultRate) + ')' : ''))
    if (nChild > 0) ppLines.push('• Giá trẻ em: ' + money(cq.childPP) + '/khách' + (cq.ticketChildRate ? ' (chia đều ' + money(cq.roomPP) + ' + vé lẻ ' + money(cq.ticketChildRate) + ')' : ''))
    if (nSenior > 0) ppLines.push('• Giá cao tuổi: ' + money(cq.seniorPP) + '/khách' + (cq.ticketSeniorRate ? ' (chia đều ' + money(cq.roomPP) + ' + vé lẻ ' + money(cq.ticketSeniorRate) + ')' : ''))
    ppLines.push('• Tổng booking: ' + money(cq.total) + ' — cọc 30% ' + money(cq.dep) + ', còn lại ' + money(cq.remain) + ' tại quầy.')
    if (cq.overlap) ppLines.push('Combo lịch trình thường đã gồm một phần phòng/vé; em không cộng trùng phần đã nằm trong gói ạ.')
    ppLines.push('Mỗi khách trả khác nhau vì vé tính theo đối tượng, phần chia đều thì bằng nhau ạ. Anh/chị cần điều chỉnh gì báo em nhé.')
  } else {
    ppLines.push('Nhập số khách và thêm hạng mục vào giỏ để em soạn văn mẫu chia đầu người ạ.')
  }
  const msgPPText = ppLines.join('\n')

  const quoteBtn = copyBtn('quote', 'Copy báo giá')
  const msgTongBtn = copyBtn('msgtong', '⧉ Copy văn mẫu tổng')
  const msgPPBtn = copyBtn('msgpp', '⧉ Copy văn mẫu đầu người')

  const childRateNote = !t
    ? 'Trẻ dưới 1m miễn phí vé, không nhập vào số trẻ. Chọn vé rồi nhấn Thêm vé — có thể thêm nhiều loại.'
    : hasChildRate
      ? 'Vé đang chọn: trẻ em ' + money(t.child) + '. Trẻ dưới 1m miễn phí, không tính vào đây. Nhấn Thêm vé để vào giỏ.'
      : 'Vé đang chọn không có giá trẻ em riêng — sẽ tính bằng giá người lớn khi thêm vào giỏ.'

  return (
    <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
      <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 6px' }}>Giỏ báo giá nhanh</h3>
      <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 20px' }}>Thêm từng hạng mục vào giỏ: vé lẻ (nhiều loại), nhiều loại phòng, combo lịch trình và dịch vụ lẻ. Tổng, cọc 30% và văn mẫu lấy đúng dòng trong giỏ. Combo itinerary không có giá niêm yết — sale nhập giá gói hiện hành; combo thường đã gồm phòng/vé nên không cộng trùng.</p>

      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '600', color: '#2A2D5C', marginBottom: '8px' }}>1. Đoàn khách (để chia đầu người)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(160px,100%),1fr))', gap: '12px' }}>
        {([['adult', 'Người lớn'], ['child', 'Trẻ em (từ 1m)'], ['senior', 'Cao tuổi (có giấy tờ)']] as const).map(([k, label]) => (
          <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>{label}</span>
            <input type="text" inputMode="numeric" autoComplete="off" placeholder="0" value={calc[k]} onInput={setField(k, 3)} style={inputStyle} />
          </label>
        ))}
      </div>
      <div style={{ marginTop: '10px', fontSize: '13px', color: '#6B7080', lineHeight: '1.55' }}>{childRateNote}</div>

      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '600', color: '#2A2D5C', margin: '18px 0 8px' }}>2. Vé lẻ — chọn loại rồi thêm vào giỏ (có thể thêm nhiều loại)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '10px', alignItems: 'end' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Loại vé</span>
          <select value={String(calc.ticket)} onChange={(e) => { const v = parseInt(e.target.value, 10); patch({ ticket: isNaN(v) ? -1 : v }) }} style={{ ...inputStyle, background: '#fff' }}>
            <option value="-1">Chọn vé niêm yết</option>
            {ticketOptions.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>
        <button onClick={addTicketLine} style={addActionBtn}>+ Thêm vé</button>
      </div>

      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '600', color: '#2A2D5C', margin: '18px 0 8px' }}>3. Phòng — gộp nhiều loại (giá bảng thấp điểm)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(160px,100%),1fr))', gap: '12px', marginBottom: '10px' }}>
        {([['nightsWd', 'Đêm ngày thường'], ['nightsWe', 'Đêm cuối tuần']] as const).map(([k, label]) => (
          <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>{label}</span>
            <input type="text" inputMode="numeric" autoComplete="off" placeholder="0" value={calc[k]} onInput={setField(k, 2)} style={inputStyle} />
          </label>
        ))}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Phòng ngoài bảng (đ cả kỳ)</span>
          <input type="text" inputMode="numeric" autoComplete="off" placeholder="0" value={grp(calc.room)} onInput={setField('room', 11)} style={inputStyle} />
        </label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '240px', overflow: 'auto', border: '1px solid #E6E8EF', borderRadius: '12px', padding: '8px' }}>
        {ROOMS.map((r, i) => (
          <div key={r.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '8px 10px', borderBottom: '1px solid #F0F1F6', flexWrap: 'wrap' }}>
            <div style={{ minWidth: '0', flex: '1 1 180px' }}>
              <div style={{ fontSize: '11px', color: '#6B7080' }}>{r.hotel}</div>
              <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#2A2D5C' }}>{r.name}</div>
              <div style={{ fontSize: '12px', color: '#3D6A62' }}>Ngày thường {money(r.wd)} · Cuối tuần {money(r.we)}</div>
            </div>
            <button onClick={() => addRoomLine(i)} style={{ border: '1px solid #4FB3A6', background: '#fff', color: '#1E6B5E', borderRadius: '8px', padding: '8px 12px', fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '500', cursor: 'pointer', minHeight: '36px', whiteSpace: 'nowrap' }}>+ Thêm phòng</button>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '600', color: '#2A2D5C', margin: '18px 0 8px' }}>4. Combo lịch trình — nhập giá gói (không tự bịa giá)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '10px', alignItems: 'end' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Combo</span>
          <select value={String(calc.comboPick || '0')} onChange={(e) => patch({ comboPick: e.target.value })} style={{ ...inputStyle, background: '#fff' }}>
            {comboPickOptions.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Giá gói (đ)</span>
          <input type="text" inputMode="numeric" autoComplete="off" placeholder="Nhập giá hiện hành" value={grp(calc.comboPrice)} onInput={setField('comboPrice', 11)} style={inputStyle} />
        </label>
        <button onClick={addComboLine} style={addActionBtn}>+ Thêm combo</button>
      </div>

      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '600', color: '#2A2D5C', margin: '18px 0 8px' }}>5. Dịch vụ lẻ khác (xe, ăn, phụ thu…)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(180px,100%),1fr))', gap: '10px', alignItems: 'end' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Tên dịch vụ</span>
          <input type="text" autoComplete="off" placeholder="VD: Xe đưa đón" value={calc.leName} onInput={setField('leName', 80)} style={inputStyle} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2A2D5C' }}>Số tiền (đ)</span>
          <input type="text" inputMode="numeric" autoComplete="off" placeholder="0" value={grp(calc.other)} onInput={setField('other', 11)} style={inputStyle} />
        </label>
        <button onClick={addLeLine} style={addActionBtn}>+ Thêm dịch vụ lẻ</button>
      </div>

      <div style={{ marginTop: '20px', background: '#F7F8FB', border: '1px solid #E6E8EF', borderRadius: '14px', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '15px', fontWeight: '600', color: '#2A2D5C' }}>Giỏ hàng</div>
          <div style={{ fontSize: '13px', color: '#6B7080' }}>{cq.lineOut.length ? cq.lineOut.length + ' hạng mục' : 'Trống'}</div>
        </div>
        {cq.lineOut.length === 0 ? (
          <div style={{ marginTop: '10px', fontSize: '13.5px', color: '#6B7080', lineHeight: '1.55' }}>Chưa có hạng mục. Thêm vé, phòng, combo hoặc dịch vụ lẻ để tính tổng.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {cq.lineOut.map((ln) => {
              const isTicket = ln.kind === 'ticket'
              const isQty = ln.kind === 'room' || ln.kind === 'combo' || ln.kind === 'le'
              const meta = isTicket
                ? `${ln.nA} NL · ${ln.nC} TE · ${ln.nS} CT`
                : ln.kind === 'room'
                  ? `${ln.qty} phòng · ${ln.wd} đêm ngày thường · ${ln.we} đêm cuối tuần`
                  : ln.kind === 'combo'
                    ? `SL ${ln.qty}${ln.pax ? ' · ' + ln.pax + ' khách ghi chú' : ''}`
                    : `SL ${ln.qty}`
              const kindLabel = isTicket ? 'Vé lẻ' : ln.kind === 'room' ? 'Phòng' : ln.kind === 'combo' ? 'Combo' : 'Dịch vụ lẻ'
              return (
                <div key={ln.id} style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '11px', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: '0', flex: '1 1 200px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '.04em', textTransform: 'uppercase', color: '#6B7080' }}>{kindLabel}</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2A2D5C', lineHeight: '1.4', marginTop: '2px' }}>{ln.title}</div>
                      <div style={{ fontSize: '12.5px', color: '#6B7080', marginTop: '3px' }}>{meta}</div>
                    </div>
                    <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '16px', fontWeight: '700', color: '#1E6B5E', whiteSpace: 'nowrap' }}>{money(ln.amt)}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px', alignItems: 'center' }}>
                    {isTicket ? (
                      <>
                        <span style={{ fontSize: '12px', color: '#6B7080' }}>NL</span>
                        <button onClick={() => bumpCartLine(ln.id, 'adult', -1)} style={stepBtn}>−</button>
                        <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>{ln.nA}</span>
                        <button onClick={() => bumpCartLine(ln.id, 'adult', 1)} style={stepBtn}>+</button>
                        <span style={{ fontSize: '12px', color: '#6B7080', marginLeft: '6px' }}>TE</span>
                        <button onClick={() => bumpCartLine(ln.id, 'child', -1)} style={stepBtn}>−</button>
                        <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>{ln.nC}</span>
                        <button onClick={() => bumpCartLine(ln.id, 'child', 1)} style={stepBtn}>+</button>
                        <span style={{ fontSize: '12px', color: '#6B7080', marginLeft: '6px' }}>CT</span>
                        <button onClick={() => bumpCartLine(ln.id, 'senior', -1)} style={stepBtn}>−</button>
                        <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>{ln.nS}</span>
                        <button onClick={() => bumpCartLine(ln.id, 'senior', 1)} style={stepBtn}>+</button>
                      </>
                    ) : null}
                    {isQty ? (
                      <>
                        <span style={{ fontSize: '12px', color: '#6B7080' }}>SL</span>
                        <button onClick={() => bumpCartLine(ln.id, 'qty', -1)} style={stepBtn}>−</button>
                        <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>{ln.qty}</span>
                        <button onClick={() => bumpCartLine(ln.id, 'qty', 1)} style={stepBtn}>+</button>
                      </>
                    ) : null}
                    <button onClick={() => removeCartLine(ln.id)} style={{ marginLeft: 'auto', border: '1px solid #F0B9A5', background: '#fff', color: '#B4441F', borderRadius: '8px', padding: '7px 12px', fontFamily: 'Outfit,sans-serif', fontSize: '12.5px', fontWeight: '500', cursor: 'pointer', minHeight: '34px' }}>Xóa</button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {cq.overlap ? (
        <div style={{ marginTop: '12px', padding: '12px 14px', background: '#FFF6F3', border: '1px solid #F6D9CF', borderRadius: '12px', fontSize: '13px', color: '#B4441F', lineHeight: '1.6' }}>Giỏ đang có combo kèm vé lẻ hoặc phòng. Combo lịch trình thường đã gồm lưu trú và một số vé — kiểm tra bao gồm/không bao gồm trước khi cộng trùng.</div>
      ) : null}

      <div style={{ marginTop: '16px', background: '#2A2D5C', borderRadius: '14px', padding: '22px', color: '#fff' }}>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
          {[
            ['Vé lẻ', money(cq.ticketTotal), '18px', '600'],
            ['Phòng', money(cq.roomAmt), '18px', '600'],
            ['Combo', money(cq.comboAmt), '18px', '600'],
            ['Dịch vụ lẻ', money(cq.otherAmt), '18px', '600'],
            ['Tổng giá', money(cq.total), '26px', '700'],
            ['Cọc 30%', money(cq.dep), '18px', '600'],
            ['Còn lại', money(cq.remain), '18px', '600'],
          ].map(([label, val, fs, fw], i) => (
            <div key={label} style={{ flex: i === 4 ? '1 1 140px' : '1 1 120px' }}>
              <div style={{ fontSize: '12px', color: '#A9AECB' }}>{label}</div>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: fs as string, fontWeight: fw as string, marginTop: '3px', color: i === 4 ? '#7FD8C9' : undefined }}>{val}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          <button onClick={() => copy(quoteText, 'quote')} style={{ border: '1px solid #4FB3A6', background: quoteBtn.bg, color: quoteBtn.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer', minHeight: '42px' }}>{quoteBtn.label}</button>
          <button onClick={() => copy(msgTongText, 'msgtong')} style={{ border: `1px solid ${msgTongBtn.bd}`, background: msgTongBtn.bg, color: msgTongBtn.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer', minHeight: '42px' }}>{msgTongBtn.label}</button>
          <button onClick={() => copy(msgPPText, 'msgpp')} style={{ border: `1px solid ${msgPPBtn.bd}`, background: msgPPBtn.bg, color: msgPPBtn.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer', minHeight: '42px' }}>{msgPPBtn.label}</button>
        </div>
      </div>

      <div style={{ marginTop: '18px', background: '#F4FBF9', border: '1px solid #D4EFE8', borderRadius: '12px', padding: '16px' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#1E6B5E' }}>Giá chia đầu người <span style={{ fontWeight: '400', color: '#3D6A62', fontSize: '12.5px' }}>— phòng + combo + dịch vụ lẻ chia {nGuests} khách, vé cộng theo đối tượng</span></div>
        {ppReady ? (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
            {([
              ['Phần chia đều / khách', money(cq.roomPP), true],
              ['Người lớn / khách', money(cq.adultPP), nAdult > 0],
              ['Trẻ em / khách', money(cq.childPP), nChild > 0],
              ['Cao tuổi / khách', money(cq.seniorPP), nSenior > 0],
            ] as const).map(([label, val, show]) =>
              show ? (
                <div key={label} style={{ background: '#fff', border: '1px solid #D4EFE8', borderRadius: '10px', padding: '10px 14px', flex: '1 1 140px' }}>
                  <div style={{ fontSize: '11.5px', color: '#3D6A62' }}>{label}</div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '700', color: '#1E6B5E', marginTop: '2px' }}>{val}</div>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <div style={{ marginTop: '8px', fontSize: '13px', color: '#3D6A62', lineHeight: '1.55' }}>Nhập số khách và thêm hạng mục vào giỏ để xem giá từng người. Trẻ dưới 1m miễn phí vé, không nhập vào đây.</div>
        )}
      </div>

      <div style={{ marginTop: '18px', background: '#fff', border: '1px solid #E6E8EF', borderRadius: '12px', padding: '16px' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#2A2D5C' }}>Văn mẫu 1 — gửi báo giá tổng</div>
        <div style={{ marginTop: '8px', whiteSpace: 'pre-line', fontSize: '13px', color: '#3A3E4C', lineHeight: '1.65', background: '#F5F6FA', borderRadius: '10px', padding: '12px 14px' }}>{msgTongText}</div>
        <button onClick={() => copy(msgTongText, 'msgtong')} style={{ marginTop: '10px', border: `1px solid ${msgTongBtn.bd}`, background: msgTongBtn.bg, color: msgTongBtn.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer', minHeight: '42px' }}>{msgTongBtn.label}</button>
      </div>

      <div style={{ marginTop: '12px', background: '#fff', border: '1px solid #E6E8EF', borderRadius: '12px', padding: '16px' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#2A2D5C' }}>Văn mẫu 2 — giải thích giá chia đầu người</div>
        <div style={{ marginTop: '8px', whiteSpace: 'pre-line', fontSize: '13px', color: '#3A3E4C', lineHeight: '1.65', background: '#F5F6FA', borderRadius: '10px', padding: '12px 14px' }}>{msgPPText}</div>
        <button onClick={() => copy(msgPPText, 'msgpp')} style={{ marginTop: '10px', border: `1px solid ${msgPPBtn.bd}`, background: msgPPBtn.bg, color: msgPPBtn.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer', minHeight: '42px' }}>{msgPPBtn.label}</button>
      </div>
      <div style={{ marginTop: '16px', padding: '14px 16px', background: '#FFF6F3', border: '1px solid #F6D9CF', borderRadius: '12px', fontSize: '13.5px', color: '#B4441F', lineHeight: '1.6' }}>Con số ở đây chỉ để tính nhanh theo giá niêm yết / giá gói sale nhập. Phải kiểm tra tình trạng chỗ, phụ thu cuối tuần/lễ/Tết và điều kiện áp dụng trước khi báo khách.</div>
    </section>
  )
}

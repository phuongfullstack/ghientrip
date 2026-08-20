export function money(v: number | string | null | undefined): string {
  if (v === null || v === undefined || (v as string) === '' || isNaN(+v)) return '—'
  return (+v).toLocaleString('vi-VN') + 'đ'
}

export function calcDigits(v: unknown): string {
  return String(v == null ? '' : v).replace(/[^0-9]/g, '')
}

export function calcNum(v: unknown): number {
  const d = calcDigits(v)
  return d === '' ? 0 : parseInt(d, 10)
}

/** Dạng nhóm chữ số cho ô nhập tiền: '' hoặc 1.500.000 */
export function grp(v: unknown): string {
  const d = calcDigits(v)
  return d === '' ? '' : parseInt(d, 10).toLocaleString('vi-VN')
}

'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const PROJECT_ID = 'y59so3hanb'

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init(PROJECT_ID)
  }, [])

  return null
}

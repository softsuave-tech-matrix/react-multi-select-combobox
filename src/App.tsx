import React from 'react'
import ComboBox from 'src/components/ComboBox'
import { PopoverProvider } from 'src/context/Popover'

export default function App() {
  return (
    <PopoverProvider>
      <ComboBox />
    </PopoverProvider>
  )
}

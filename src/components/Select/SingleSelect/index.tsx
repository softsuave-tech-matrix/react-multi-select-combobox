import React from 'react'
import { PopoverContainer, RowContainer } from 'src/components/Select/SingleSelect/styled'
import { usePopover } from 'src/context/Popover'
import dataProvider from 'src/data'

export default function SingleSelect() {
  const { popoverRef } = usePopover()

  return (
    <PopoverContainer ref={popoverRef}>
      {dataProvider.map((option) => {
        return (
          <RowContainer key={`cbss_${option.label}`} isSelected={false}>
            {option.label}
          </RowContainer>
        )
      })}
    </PopoverContainer>
  )
}

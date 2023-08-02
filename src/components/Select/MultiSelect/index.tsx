import React from 'react'
import {
  ButtonContainer,
  ListContainer,
  PopoverContainer,
  RowContainer,
  SearchContainer,
  SelectAllContainer,
} from 'src/components/Select/MultiSelect/styled'
import { usePopover } from 'src/context/Popover'
import dataProvider from 'src/data'

export default function MultiSelect() {
  const { popoverRef } = usePopover()

  return (
    <PopoverContainer ref={popoverRef}>
      <SearchContainer />
      <SelectAllContainer />
      <ListContainer>
        {dataProvider.map((option) => {
          return (
            <RowContainer key={`cbms_${option.label}`} isSelected={false}>
              {option.label}
            </RowContainer>
          )
        })}
      </ListContainer>
      <ButtonContainer />
    </PopoverContainer>
  )
}

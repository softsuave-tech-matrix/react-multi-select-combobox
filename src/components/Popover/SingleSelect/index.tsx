import React from 'react'
import { ComboBoxSelectedItemsType } from '../../../types/combobox'
import { SingleSelectPropType } from '../../../types/popover'
import { SingleSelectPopoverContainer, RowContainer } from '../index.styled'

export default function SingleSelect({
  closePopover,
  onComplete,
  options,
  popoverRef,
}: SingleSelectPropType) {
  return (
    <SingleSelectPopoverContainer ref={popoverRef}>
      {options.map((option: ComboBoxSelectedItemsType) => {
        return (
          <RowContainer
            style={{ backgroundColor: option.isSelected ? 'lightblue' : 'white' }}
            key={`cbss_opt_${option.value}`}
            onClick={() => {
              onComplete({
                label: option.label,
                value: option.value,
              })
              closePopover()
            }}
          >
            {option.label}
          </RowContainer>
        )
      })}
    </SingleSelectPopoverContainer>
  )
}

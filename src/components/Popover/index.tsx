import React from 'react'
import MultiSelect from './MultiSelect'
import SingleSelect from './SingleSelect'
import { popoverType } from '../../types/popover'

export default function Popover({
  cancelText,
  closePopover,
  isSingleSelect,
  onComplete,
  options,
  popoverRef,
  primaryColor,
  selectAllText,
  submitText,
  value,
}: popoverType) {
  if (isSingleSelect) {
    return (
      <SingleSelect
        closePopover={closePopover}
        onComplete={onComplete}
        options={options}
        popoverRef={popoverRef}
      />
    )
  }

  return (
    <MultiSelect
      cancelText={cancelText}
      closePopover={closePopover}
      onComplete={onComplete}
      options={options}
      popoverRef={popoverRef}
      primaryColor={primaryColor}
      selectAllText={selectAllText}
      submitText={submitText}
      value={value}
    />
  )
}

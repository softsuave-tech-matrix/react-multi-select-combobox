/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from 'react'
import { defaultLocale } from '../../../constants'
import { performOnlyChange, performSelectAllChange, performStateChange } from '../../../helpers'
import SearchIcon from '../../../Icons/Search'
import { ComboBoxSelectedItemsType } from '../../../types/combobox'
import { MultiSelectPropType } from '../../../types/popover'
import { IconContainer } from '../../ComboBox/index.styled'
import { ActionButton, TextButton } from '../../Custom/Button'
import { CustomInput } from '../../Custom/Input'
import {
  ButtonsContainer,
  CheckboxContainer,
  ListContainerContainer,
  OnlyLabelContainer,
  MultiSelectPopoverContainer,
  RowContainer,
  SearchContainer,
  SelectAllContainer,
} from '../index.styled'

const isOnlyRequired = false

export default function MultiSelect({
  cancelText,
  closePopover,
  onComplete,
  options,
  popoverRef,
  primaryColor,
  selectAllText,
  submitText,
}: MultiSelectPropType) {
  const [query, setQuery] = useState<string>('')
  const [generatedOptions, setGeneratedOptions] = useState<ComboBoxSelectedItemsType[]>([])
  const [filteredOptions, setFilteredOptions] = useState<ComboBoxSelectedItemsType[]>([])

  useEffect(() => {
    setGeneratedOptions(options)
  }, [options])

  useEffect(() => {
    setFilteredOptions(
      generatedOptions.filter((option) => {
        const labelElement = String(option.label).toLowerCase()
        const queryElement = String(query).toLowerCase()

        return labelElement.includes(queryElement)
      }),
    )
  }, [query, generatedOptions])

  const isAllSelected = useMemo(() => {
    return generatedOptions.length
      ? Boolean(
          generatedOptions.filter((option) => !option.isDisabled).length ===
            generatedOptions.filter((option) => option.isSelected).length,
        )
      : false
  }, [generatedOptions])

  const onStateChange = (identifier: string | number) => {
    setGeneratedOptions(performStateChange(generatedOptions, identifier))
  }

  const onOnlyChange = (identifier: string | number) => {
    setGeneratedOptions(performOnlyChange(generatedOptions, identifier))
  }

  const selectAllHandler = () => {
    setGeneratedOptions(performSelectAllChange(generatedOptions, !isAllSelected))
  }

  const completeHandler = () => {
    onComplete(filteredOptions.filter((item) => item.isSelected))
    closePopover()
  }

  const checkBoxThemeColor = useMemo(() => (primaryColor ? primaryColor : 'auto'), [primaryColor])

  return (
    <MultiSelectPopoverContainer ref={popoverRef}>
      <SearchContainer>
        <CheckboxContainer>
          <IconContainer>
            <SearchIcon />
          </IconContainer>
        </CheckboxContainer>
        <CustomInput
          changeHandler={(value: any) => setQuery(value)}
          placeHolder='search...'
          value={query}
        />
      </SearchContainer>
      <SelectAllContainer>
        <CheckboxContainer>
          <input
            type='checkbox'
            style={{ accentColor: checkBoxThemeColor }}
            checked={isAllSelected}
            onChange={selectAllHandler}
          />
        </CheckboxContainer>
        <TextButton clickHandler={selectAllHandler} text={selectAllText ? selectAllText : ''} />
      </SelectAllContainer>
      <ListContainerContainer>
        {filteredOptions.map((dataItem) => {
          return (
            <RowContainer key={`cbms_opt_${dataItem.value}`}>
              <CheckboxContainer>
                <input
                  type='checkbox'
                  style={{ accentColor: checkBoxThemeColor }}
                  disabled={Boolean(dataItem.isDisabled)}
                  checked={dataItem.isSelected}
                  onChange={() => {
                    if (!dataItem.isDisabled) {
                      onStateChange(dataItem.value)
                    }
                  }}
                />
              </CheckboxContainer>
              <TextButton
                clickHandler={() => {
                  if (!dataItem.isDisabled) {
                    onStateChange(dataItem.value)
                  }
                }}
                text={dataItem.label}
              />
              {isOnlyRequired && (
                <OnlyLabelContainer
                  onClick={() => {
                    onOnlyChange(dataItem.value)
                  }}
                >
                  {defaultLocale.only}
                </OnlyLabelContainer>
              )}
            </RowContainer>
          )
        })}
      </ListContainerContainer>
      <ButtonsContainer>
        <ActionButton clickHandler={closePopover} text={cancelText ? cancelText : ''} />
        <ActionButton clickHandler={completeHandler} text={submitText ? submitText : ''} />
      </ButtonsContainer>
    </MultiSelectPopoverContainer>
  )
}

import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled'
import { generateOptions, getSelectedItemsPlaceHolder } from '../../helpers'
import { useClickOutside } from '../../hooks/useClickOutside'
import DownArraycon from '../../Icons/DownArrow'
import { ComboBoxSelectedItemsType, ComboBoxType } from '../../types/combobox'
import Popover from '../Popover'

export default function ComboBox({
  cancelText,
  dataProvider,
  isSingleSelect,
  leftAdornment,
  onComplete = () => null,
  placeHolder,
  rightAdornment,
  selectAllText,
  submitText,
  value = [],
}: ComboBoxType) {
  const popoverRef = useRef(null)
  const [toggle, setToggle] = useState<boolean>(false)
  const [options, setOptions] = useState<ComboBoxSelectedItemsType[]>([])

  const closePopover = useCallback(() => setToggle(false), [])
  useClickOutside(popoverRef, closePopover)

  useEffect(() => {
    const data = generateOptions(dataProvider, value)

    setOptions(data)
  }, [dataProvider, value])

  const openPopover = () => {
    setToggle(true)
  }

  const renderLeftAdornment = useMemo(() => {
    return leftAdornment ? <IconContainer>{leftAdornment}</IconContainer> : null
  }, [leftAdornment])

  const renderPlaceHolder = useMemo(() => {
    const convertedValue = Array.isArray(value) ? value : [value]

    return convertedValue.length ? getSelectedItemsPlaceHolder(convertedValue) : placeHolder
  }, [value, placeHolder])

  const renderRightAdornment = useMemo(() => {
    return rightAdornment ? (
      <IconContainer>{rightAdornment}</IconContainer>
    ) : (
      <IconContainer>
        <DownArraycon />
      </IconContainer>
    )
  }, [rightAdornment])

  const renderPopover = useMemo(() => {
    if (toggle) {
      return (
        <Popover
          cancelText={cancelText}
          closePopover={closePopover}
          isSingleSelect={isSingleSelect}
          dataProvider={dataProvider}
          onComplete={onComplete}
          options={options}
          popoverRef={popoverRef}
          selectAllText={selectAllText}
          submitText={submitText}
          value={value}
        />
      )
    }

    return <React.Fragment />
  }, [
    toggle,
    popoverRef,
    cancelText,
    closePopover,
    dataProvider,
    isSingleSelect,
    onComplete,
    options,
    selectAllText,
    submitText,
    value,
  ])

  return (
    <RootContainer>
      <DisplayContainer onClick={openPopover}>
        {renderLeftAdornment}
        <ShowSelectedItemsContainer hasLeftAdornment={Boolean(leftAdornment)}>
          {renderPlaceHolder}
        </ShowSelectedItemsContainer>
        {renderRightAdornment}
      </DisplayContainer>
      {renderPopover}
    </RootContainer>
  )
}

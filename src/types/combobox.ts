/* eslint-disable no-unused-vars */

import { ReactNode } from 'react'

export interface ShowSelectedItemsContainerType {
  hasLeftAdornment: boolean
}

export interface ComboBoxDataProviderType {
  isDisabled?: boolean
  isSelected?: boolean
  label: string
  value: string | number
}

export interface ComboBoxOptionsType {
  label: string
  value: string | number
}

export interface ComboBoxSelectedItemsType {
  isDisabled: boolean
  isSelected: boolean
  label: string
  value: string | number
}

export interface ComboBoxType {
  backgroundColor?: string
  cancelText?: string
  dataProvider: ComboBoxDataProviderType[]
  isSingleSelect: boolean
  leftAdornment?: ReactNode
  onComplete?: (value: ComboBoxOptionsType[] | ComboBoxOptionsType) => void
  placeHolder?: string
  primaryColor?: string
  rightAdornment?: ReactNode
  selectAllText?: string
  submitText?: string
  value?: ComboBoxOptionsType[] | ComboBoxOptionsType
  textColor?: string
}

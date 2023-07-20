/* eslint-disable no-unused-vars */
import { RefObject } from 'react'
import {
  ComboBoxDataProviderType,
  ComboBoxOptionsType,
  ComboBoxSelectedItemsType,
} from './combobox'

export interface popoverType {
  cancelText?: string
  closePopover: () => void
  dataProvider: ComboBoxDataProviderType[]
  isSingleSelect: boolean
  onComplete: (value: ComboBoxOptionsType[] | ComboBoxOptionsType) => void
  options: ComboBoxSelectedItemsType[]
  popoverRef: RefObject<HTMLDivElement>
  primaryColor?: string
  selectAllText?: string
  submitText?: string
  value: ComboBoxOptionsType[] | ComboBoxOptionsType
}

export interface SingleSelectPropType {
  closePopover: () => void
  onComplete: (value: ComboBoxOptionsType[] | ComboBoxOptionsType) => void
  options: ComboBoxSelectedItemsType[]
  popoverRef: RefObject<HTMLDivElement>
}

export interface MultiSelectPropType {
  cancelText?: string
  closePopover: () => void
  onComplete: (value: ComboBoxOptionsType[] | ComboBoxOptionsType) => void
  options: ComboBoxSelectedItemsType[]
  popoverRef: RefObject<HTMLDivElement>
  primaryColor?: string
  selectAllText?: string
  submitText?: string
  value: ComboBoxOptionsType[] | ComboBoxOptionsType
}

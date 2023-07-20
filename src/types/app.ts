/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { ComboBoxDataProviderType, ComboBoxOptionsType } from '../types/combobox'

export interface AppPropType {
  backgroundColor?: string
  cancelText?: string
  dataProvider: ComboBoxDataProviderType[]
  isSingleSelect?: boolean
  leftAdornment?: ReactNode
  onComplete?: (value: ComboBoxOptionsType[] | ComboBoxOptionsType) => void
  placeHolder?: string
  primaryColor?: string
  rightAdornment?: ReactNode
  selectAllText?: string
  submitText?: string
  value: ComboBoxOptionsType[] | ComboBoxOptionsType
  textColor?: string
}

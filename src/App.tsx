import React from 'react'
import ComboBox from './components/ComboBox'
import { defaultLocale, defaultStyles } from './constants'
import AppThemeProvider from './context/ThemeContext'
import { AppPropType } from './types/app'

export default function App({
  backgroundColor = defaultStyles.backgroundColor,
  cancelText = defaultLocale.cancel,
  dataProvider = [],
  isSingleSelect = false,
  leftAdornment = null,
  onComplete = () => null,
  placeHolder = defaultLocale.placeHolder,
  primaryColor = defaultStyles.primaryColor,
  rightAdornment = null,
  selectAllText = defaultLocale.selectAll,
  submitText = defaultLocale.submit,
  textColor = defaultStyles.textColor,
  value = [],
}: AppPropType) {
  return (
    <AppThemeProvider
      backgroundColor={backgroundColor}
      borderStyle={defaultStyles.borderStyle}
      containerHeight={defaultStyles.containerHeight}
      containerPadding={defaultStyles.containerPadding}
      containerWidth={defaultStyles.containerWidth}
      fontStyle={defaultStyles.fontStyle}
      primaryColor={primaryColor}
      textColor={textColor}
    >
      <ComboBox
        cancelText={cancelText}
        dataProvider={dataProvider}
        isSingleSelect={isSingleSelect}
        leftAdornment={leftAdornment}
        onComplete={onComplete}
        placeHolder={placeHolder}
        rightAdornment={rightAdornment}
        selectAllText={selectAllText}
        submitText={submitText}
        value={value}
      />
    </AppThemeProvider>
  )
}

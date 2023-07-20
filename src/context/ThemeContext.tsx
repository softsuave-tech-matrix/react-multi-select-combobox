import React, { createContext } from 'react'
import { ThemeProvider } from '@emotion/react'
import { AppThemeProviderPropType } from '../types/theme'

export const AppThemeContext = createContext<null>(null)

const AppThemeProvider = ({
  backgroundColor,
  borderStyle,
  children,
  containerHeight,
  containerPadding,
  containerWidth,
  fontStyle,
  primaryColor,
  textColor,
}: AppThemeProviderPropType) => {
  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider
        theme={{
          colors: {
            backgroundColor: backgroundColor,
            primaryColor: primaryColor,
            textColor: textColor,
          },
          styles: {
            borderStyle: borderStyle,
            containerHeight: containerHeight,
            containerPadding: containerPadding,
            containerWidth: containerWidth,
            fontStyle: fontStyle,
          },
        }}
      >
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider

import { ReactNode } from 'react'

export interface AppThemeProviderPropType {
  backgroundColor: string
  borderStyle: string
  children: ReactNode
  containerHeight: string
  containerPadding: string
  containerWidth: string
  primaryColor: string
  fontStyle: string
  textColor: string
}

interface ColorsPropsType {
  backgroundColor: string
  primaryColor: string
  textColor: string
}

interface StylesPropType {
  borderStyle: string
  containerHeight: string
  containerPadding: string
  containerWidth: string
  fontStyle: string
}

interface ThemePropsType {
  colors: ColorsPropsType
  styles: StylesPropType
}

export interface ThemeProviderPropsType {
  theme?: ThemePropsType
  hasLeftAdornment?: boolean
}

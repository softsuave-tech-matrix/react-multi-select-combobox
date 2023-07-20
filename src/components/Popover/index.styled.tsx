import styled from '@emotion/styled'
import { ThemeProviderPropsType } from '../../types/theme'

export const MultiSelectPopoverContainer = styled.div<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  height: ${(props) => props.theme.styles.containerHeight};
  width: ${(props) => props.theme.styles.containerWidth};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  top: -1px;
  left: -1px;
  position: absolute;
  z-index: 100;
  margin: 0px;
  padding: 2px;
`

export const SingleSelectPopoverContainer = styled.div<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  max-height: 220px;
  width: 240px;
  overflow: auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  top: -1px;
  left: -1px;
  position: absolute;
  z-index: 100;
  margin: 0px;
  padding: 2px;
`

export const SearchContainer = styled.div<ThemeProviderPropsType>`
  border-bottom: ${(props) => props.theme.styles.borderStyle};
  padding: ${(props) => props.theme.styles.containerPadding};
  display: flex;
  align-items: center;
  height: 35px;
`

export const SelectAllContainer = styled.div<ThemeProviderPropsType>`
  border-bottom: ${(props) => props.theme.styles.borderStyle};
  padding: ${(props) => props.theme.styles.containerPadding};
  height: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ListContainerContainer = styled.div<ThemeProviderPropsType>`
  padding: ${(props) => props.theme.styles.containerPadding};
  overflow: auto;
  height: calc(100% - 140px);
`

export const ButtonsContainer = styled.div<ThemeProviderPropsType>`
  border-top: ${(props) => props.theme.styles.borderStyle};
  padding: ${(props) => props.theme.styles.containerPadding};
  margin-top: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const RowContainer = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`

export const LabelContainer = styled.div`
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 90px);
  padding: 0px 5px;
`

export const OnlyLabelContainer = styled.div<ThemeProviderPropsType>`
  color: ${(props) => props.theme.colors.textColor};
  cursor: pointer;
  text-align: center;
  width: 50px;
`

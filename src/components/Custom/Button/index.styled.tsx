import styled from '@emotion/styled'
import { ThemeProviderPropsType } from '../../../types/theme'

export const ActionButtonContainer = styled.button<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) =>
    props.theme.colors.primaryColor
      ? props.theme.colors.primaryColor
      : props.theme.colors.textColor};
  font-family: ${(props) => props.theme.styles.fontStyle};
  align-items: center;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`

export const TextButtonContainer = styled.button<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.styles.fontStyle};
  border: none;
  cursor: pointer;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: baseline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 40px);
  padding: 0px 5px;
`

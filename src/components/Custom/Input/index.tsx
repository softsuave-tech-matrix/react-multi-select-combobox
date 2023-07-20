import React from 'react'
import styled from '@emotion/styled'
import { CustomInputPropsType } from '../../../types/custom'
import { ThemeProviderPropsType } from '../../../types/theme'

const Component: React.FunctionComponent<CustomInputPropsType> = ({
  className,
  changeHandler,
  placeHolder,
  value,
}) => {
  return (
    <input
      className={className}
      type='text'
      onChange={(event) => changeHandler(event.target.value)}
      placeholder={placeHolder}
      value={value}
    />
  )
}

export const CustomInput = styled(Component)<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.styles.fontStyle};
  border: none;
  height: 30px;
  padding-left: 5px;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`

import React from 'react'
import { ActionButtonContainer, TextButtonContainer } from './index.styled'
import { CustomButtonPropsType } from '../../../types/custom'

export function ActionButton({ clickHandler, text }: CustomButtonPropsType) {
  return <ActionButtonContainer onClick={clickHandler}>{text}</ActionButtonContainer>
}

export function TextButton({ clickHandler, text }: CustomButtonPropsType) {
  return <TextButtonContainer onClick={clickHandler}>{text}</TextButtonContainer>
}

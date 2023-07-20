/* eslint-disable no-unused-vars */

export interface CustomButtonPropsType {
  clickHandler: () => void
  text: string
}

export interface CustomInputPropsType {
  className?: string
  changeHandler: (value: string) => void
  placeHolder: string
  value: string
}

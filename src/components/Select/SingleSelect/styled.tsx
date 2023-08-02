import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { RowContainerPropType } from 'src/components/Select/SingleSelect/type'

export const PopoverContainer = styled.div`
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: black;
  left: -1px;
  margin: 0px;
  max-height: 220px;
  overflow: auto;
  position: absolute;
  top: -1px;
  width: 240px;
  z-index: 1;
`
export const RowContainer = styled.div<RowContainerPropType>`
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : 'white')};
  display: flex;
  height: 32px;
  padding-left: 5px;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : 'lightgrey')};
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: lightblue;
    `}
`

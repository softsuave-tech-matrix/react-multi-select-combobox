import styled from '@emotion/styled'
import { RowContainerPropType } from 'src/components/Select/MultiSelect/type'

export const PopoverContainer = styled.div`
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: black;
  height: 330px;
  left: -1px;
  margin: 0px;
  overflow: hidden;
  padding: 2px;
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
`

export const SearchContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  height: 35px;
`

export const SelectAllContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  height: 35px;
`

export const ListContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  height: calc(100% - 120px);
  overflow-x: auto;
`

export const ButtonContainer = styled.div`
  height: 50px;
`

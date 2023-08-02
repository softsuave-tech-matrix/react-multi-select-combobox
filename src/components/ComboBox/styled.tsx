import styled from '@emotion/styled'

const customFontFamily = `system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif`

export const RootContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  color: black;
  display: flex;
  font-family: ${customFontFamily};
  font-size: 0.875rem;
  height: 35px;
  position: relative;
  width: 240px;
`
export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 40px;
`
export const TextContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding-left: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

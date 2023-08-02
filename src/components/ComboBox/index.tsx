import React, { useMemo } from 'react'
import Popover from 'src/components/Popover'
import { IconWrapper, RootContainer, TextContainer } from 'src/components/ComboBox/styled'
import { usePopover } from 'src/context/Popover'

export default function ComboBox() {
  const { openPopover, toggle } = usePopover()

  const leftAdornment = null
  const rightAdornment = null

  const renderLeftAdornment = useMemo(() => {
    if (leftAdornment) {
      return <IconWrapper>{leftAdornment}</IconWrapper>
    }

    return null
  }, [])

  const renderRightAdornment = useMemo(() => {
    if (rightAdornment) {
      return <IconWrapper>{rightAdornment}</IconWrapper>
    }

    return <IconWrapper>R</IconWrapper>
  }, [])

  const renderText = useMemo(() => {
    return 'Select sport(s)'
  }, [])

  const renderPopover = useMemo(() => {
    if (toggle) {
      return <Popover />
    }

    return null
  }, [toggle])

  return (
    <RootContainer
      onClick={() => {
        openPopover()
      }}
    >
      {renderLeftAdornment}
      <TextContainer>{renderText}</TextContainer>
      {renderRightAdornment}
      {renderPopover}
    </RootContainer>
  )
}

import React from 'react'
import MultiSelect from 'src/components/Select/MultiSelect'
import SingleSelect from 'src/components/Select/SingleSelect'

const isSingleSelect = false

export default function Popover() {
  return isSingleSelect ? <SingleSelect /> : <MultiSelect />
}

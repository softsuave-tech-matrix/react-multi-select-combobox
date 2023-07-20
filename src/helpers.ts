import {
  ComboBoxDataProviderType,
  ComboBoxOptionsType,
  ComboBoxSelectedItemsType,
} from './types/combobox'

export const getSelectedItemsPlaceHolder = (selectedItems: ComboBoxOptionsType[]) => {
  return selectedItems
    .map((selectedItem) => selectedItem.label)
    .join(', ')
    .toString()
}

const sortAlphabetically = (
  element1: ComboBoxDataProviderType,
  element2: ComboBoxDataProviderType,
) => {
  const element1Label = element1.label
  const element2Label = element2.label

  if (element1Label < element2Label) {
    return -1
  } else if (element1Label > element2Label) {
    return 1
  } else {
    return 0
  }
}

const findIsSelected = (
  selectedValues: ComboBoxOptionsType[] | ComboBoxOptionsType,
  item: ComboBoxDataProviderType,
) => {
  const convertedSelectedValues = Array.isArray(selectedValues) ? selectedValues : [selectedValues]

  return Boolean(
    convertedSelectedValues.find((selectedValue) => {
      return selectedValue.value === item.value
    }),
  )
}

export const generateOptions = (
  dataProvider: ComboBoxDataProviderType[],
  selectedValues: ComboBoxOptionsType[] | ComboBoxOptionsType,
) => {
  if (dataProvider) {
    const sortedArray = dataProvider.sort((element1, element2) => {
      return sortAlphabetically(element1, element2)
    })

    return sortedArray.map((item) => {
      return {
        label: item.label,
        value: item.value,
        isDisabled: item.isDisabled ? item.isDisabled : false,
        isSelected: findIsSelected(selectedValues, item),
      }
    })
  } else {
    return dataProvider
  }
}

export const performStateChange = (
  dataProvider: ComboBoxSelectedItemsType[],
  identifier: string | number,
) => {
  return dataProvider.map((option) => {
    if (option.value === identifier) {
      return { ...option, isSelected: !option.isSelected }
    } else {
      return { ...option }
    }
  })
}

export const performOnlyChange = (
  dataProvider: ComboBoxSelectedItemsType[],
  identifier: string | number,
) => {
  return dataProvider.map((option) => {
    if (option.value === identifier) {
      return { ...option, isSelected: true }
    } else {
      return { ...option, isSelected: false }
    }
  })
}

export const performSelectAllChange = (
  dataProvider: ComboBoxSelectedItemsType[],
  stateToSelect: boolean,
) => {
  return dataProvider.map((option) => {
    return {
      ...option,
      isSelected: option.isDisabled ? false : stateToSelect,
    }
  })
}

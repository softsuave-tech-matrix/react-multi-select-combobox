import { ComboBoxStory } from './ComboBox'

const storyConfig = {
  title: 'Combo Box',
  component: ComboBoxStory,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
  },
}

export const Simple = {
  args: {
    backgroundColor: 'white',
    cancelText: 'CANCEL',
    isSingleSelect: false,
    placeHolder: 'Select sport(s)',
    primaryColor: 'unset',
    selectAllText: 'Select All',
    submitText: 'OK',
    textColor: 'black',
  },
}

export default storyConfig

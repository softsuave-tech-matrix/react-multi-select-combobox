# react-select-combobox

react-select-combobox is a select control component which helps in narrowing down your results by selecting one or more options provided.

## Installation

Install react-select-combobox with npm

```npm
  npm install react-select-combobox
```

## Usage/Examples

## Simple Example

```javascript
import React from 'react';
import { ComboBox } from 'react-select-combobox';

const dataProvider = [
  { label: 'Apple', value: 111 },
  { label: 'Pineapple', value: 112 },
  { label: 'Litchi', value: 113 },
  { label: 'Orange', value: 114 },
  { label: 'Banana', value: 115 },
];

export default function App() {
  const [selectedItems, setSelectedItems] = React.useState([]);

  return (
    <div>
      <ComboBox
        dataProvider={dataProvider}
        value={selectedItems}
        onComplete={(value) => {
          setSelectedItems(value);
        }}
      />
    </div>
  );
}
```

## Select items by default

```javascript
import React from 'react';
import { ComboBox } from 'react-select-combobox';

const dataProvider = [
  { label: 'Apple', value: 111 },
  { label: 'Pineapple', value: 112 },
  { label: 'Litchi', value: 113 },
  { label: 'Orange', value: 114 },
  { label: 'Banana', value: 115 },
];

export default function App() {
  const [selectedItems, setSelectedItems] = React.useState([
    { label: 'Apple', value: 111 },
    { label: 'Pineapple', value: 112 },
  ]);

  return (
    <div>
      <ComboBox
        dataProvider={dataProvider}
        value={selectedItems}
        onComplete={(value) => {
          setSelectedItems(value);
        }}
      />
    </div>
  );
}
```

## Typescript Example

```javascript
import React from "react";
import { ComboBox, ComboBoxOptionsType } from "react-select-combobox";

const dataProvider = [
  { label: "Apple", value: 111 },
  { label: "Pineapple", value: 112 },
  { label: "Litchi", value: 113 },
  { label: "Orange", value: 114 },
  { label: "Banana", value: 115 }
];

export default function App() {
  const [selectedItems, setSelectedItems] = React.useState<
    ComboBoxOptionsType[] | ComboBoxOptionsType
  >([]);

  return (
    <ComboBox
      dataProvider={dataProvider}
      value={selectedItems}
      onComplete={(value) => {
        setSelectedItems(value);
      }}
    />
  );
}
```
## Demo

https://6480578bad52defd0eefe6ae-vbelaysmmu.chromatic.com/?path=/story/combo-box--simple

## Props

Common props you may want to specify include:

- `cancelText` - text which replaces CANCEL text
- `dataProvider` - specify list of options for users to select
- `leftAdornment` - icon which appears left side of the Filter box
- `onComplete` - handler to get the selected items || [] on submit
- `placeHolder` - text which replaces Select... text
- `primaryColor` - color String which changes Button and Checkbox color
- `rightAdornment` - icon which appears right side of the Filter box
- `selectAllText` - text which replaces Select All text
- `submitText` - text which replaces OK text
- `value` - control the current value

## Features

- Customalizable
- Cross browser supported
- Light weighted
- Search and Filter options

## Contributing

Contributions are always welcome! For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

- [@softsuave-tech-matrix](https://github.com/softsuave-tech-matrix)

## Feedback

If you have any feedback, please reach out to us at techmatrix@softsuave.com


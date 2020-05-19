# uploan-ui-input
Component to render input.

## How to use
### Intall via npm
```js
npm install uploan-ui-input
```

### Import and use
```js
import UploanUiInput from 'uploan-ui-button';

<UploanUiInput
  label="Text"
  maxLength={48}
  type="text"
  placeholder="Enter sample text"
  required
/>
```

### Input types

`text` Accepts any characters.

```js
<UploanUiInput type="text" />
```

`password` Accepts any characters but masked text.

```js
<UploanUiInput type="password" />
```

`email` Accepts string that is in email format.

```js
<UploanUiInput type="email" />
```

`number` Accepts only digits.

```js
<UploanUiInput type="number" />
```

### Input format

`number` Accepts digits, decimal, and comma. Displays a valid amount format
automatically.

```js
<UploanUiInput format="amount" />
```

## Props
| Props            | Type        | Description                              |
| ---------------- | ----------- | ---------------------------------------- |
| @props           | Object      | `<UploanUiInput>` props.                 |
| @props.format    | label       | Input display name.                      |
| @props.disabled  | label       | Input display name.                      |
| @props.fullWidth | boolean     | Attribute maxlength for input element.   |
| @props.ghost     | name        | Attribute name for input element.        |
| @props.label     | placeholder | Attribute placeholder for input element. |
| @props.loading   | required    | Determines if input is required.         |
| @props.round     | type        | Attribute type for input element.        |

## States
| State      | Default | Type    | Method        | Description                          |
| ---------- | ------- | ------- | ------------- | ------------------------------------ |
| inputValue | ''      | string  | setInputValue | Value displayed on the actual input. |

## Methods

### formatAmount
- Adds currency and decimal to the stringified amount.

### formatFloatingAmount
- Formats initial value of amount input.

## Styling
```js
import ElementContainer from 'uploan-styles';
```
Contains access to project's `themes`.

```js
import { Input } from '../assets/css/UploanUiInput.css';
``` 
Contains **styled-component** styling for input.
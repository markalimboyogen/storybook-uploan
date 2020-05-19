# uploan-ui-checkbox
Component to render checkbox.

## How to use
### Intall via npm
```js
npm install uploan-ui-checkbox
```

### Import and use
```js
import UploanUiCheckbox from 'uploan-ui-button';

<UploanUiCheckbox
  label="Checkbox 1"
  name="checkbox1"
  required
>
```

## Props
| Props           | Type    | Description                                  |
| --------------- | ------- | -------------------------------------------- |
| @props          | Object  | `<UploanUiCheckbox>` props.                  |
| @props.checked  | boolean | Initial attribute checked value of checkbox. |
| @props.label    | string  | Label associated with the checkbox.          |
| @props.name     | string  | Attribute name of checkbox element.          |
| @props.required | boolean | Determines if checkbox should be required.   |

## States
| State   | Default | Type    | Method     | Description                                      |
| ------- | ------- | ------- | ---------- | ------------------------------------------------ |
| checked | false   | boolean | setChecked | Determines if checkbox should be checked or not. |.

## Styling
```js
import ElementContainer from 'uploan-styles';
```
Contains access to project's `themes`.

```js
import { Checkbox } from '../assets/css/UploanUiCheckbox.css';
``` 
Contains **styled-component** styling for checkbox.
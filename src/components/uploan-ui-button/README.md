# uploan-ui-button
Component to render button.

## How to use
### Intall via npm
```js
npm install uploan-ui-button
```

### Import and use
```js
import UploanUiButton from 'uploan-ui-button';

<UploanUiButton
  fullWidth
  ghost
  label="Use me..."
  round
/>
```

## Props
| Props            | Type    | Description                                                      |
| ---------------- | ------- | ----------------------------------------------------------------
| @props           | Object  | `<UploanUiButton>` props.                                        |
| @props.disabled  | boolean | Determines if button should have no background.                  |
| @props.fullWidth | string  | Determines if button should have a width of 100%.                |
| @props.ghost     | boolean | Determines if button should only have borders and no background. |
| @props.label     | string  | Text to be displayed inside button.                              |
| @props.loading   | boolean | Determines if button show a loading spinner.                     |
| @props.round     | boolean | Determines if button should be rounded.                          |

## Styling
```js
import ElementContainer from 'uploan-styles';
```
Contains access to project's `themes`.

```js
import { Button } from '../assets/css/UploanUiButton.css';
``` 
Contains **styled-component** styling for button.
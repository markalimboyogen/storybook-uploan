# uploan-icon
Component to render svg icons.

## How to use
### Intall via npm
```js
npm install uploan-icon
```

### Import and use
```js
import UploanIcon from 'uploan-icon';

<UploanIcon svg={chevronDownSolid()} size="12"/>
```

## Props
| Props        | Type       | Description                                    |
| ------------ | ---------- | ----------------------------------------------
| @props       | Object     | `<UploanIcon>` props.                          |
| @props.color | string     | Hex code to specify color of icon. Ex: `#fff`. |
| @props.size  | string     | Expected size of icon. Ex: `16`.               |
| @props.svg   | SVGElement | `<svg />` element of icon.                     |

## Styling
```js
import ElementContainer from 'uploan-styles';
```
Contains access to project's `themes`.

```js
import { Icon } from '../assets/css/UploanUiButton.css';
``` 
Contains **styled-component** styling for icon.
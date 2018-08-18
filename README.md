made with create-react-app

###### npm package: biplane-uikit

to look at examples:
`npm i` or `yarn install`

then `npm run start` or `yarn start`

components:
1. Button
2. Checkbox
3. Search Field
4. Modal
5. Select
6. Tooltip
7. (function) Number formatter

#### Docs:
###### Button
Props:
* children: text on the button, may be any valid react node
* appearance: one of strings: 'primary', 'secondary'
* disabled: boolean
* onClick: function

###### Checkbox
Simple stylized checkbox with label

Props:
* label: string that is rendered to the right of the checkbox
* disabled: boolean
* checked: default input type="checkbox" prop, can be `true` or `false`
* onChange: default input's "onChange" function

###### Search
Simple stylized text input

Props:
* placeholder: string
* disabled: boolean
* onChange: default input's "onChange" function
* value: value string

###### Modal
Component that renders a modal window with specified content inside, can be placed wherever in its parent component layout. Uses react portal and due to that you **have to have a div with id='modal-root' in your index.html file**

Props:
* children: content of the modal, react node
* size: width of modal, one of strings: 'small', 'medium'
* onClose: function that modal calls when the "close" button is pressed

###### numberFormatter
Simple function that formats number into string with "k" and "mil"
in: number, out: string

###### Select
Dropdown selector

Props:
* options: array of `{label: string, value: string}`-shaped elements
* onChange: function called with `value` of selected option
* value: one of `options`' `value`s
* disabled: boolean
* placeholder: string that renders by default if a value was not provided

###### Tooltip
Wrapper component that will render a tooltip with specified text under the wrapped content on content hover

Props:
* children: wrapped content, any valid react node
* label: content of the tooltip window, any valid react node


#### Importing
###### ES6:

import {Button} from 'biplane-uikit/lib';

...

###### CSS:

@import 'biplane-uikit/lib/colors.css';

@import 'biplane-uikit/lib/variabled.css';


#### Dependencies:

classnames: lib for combining classNames with ease

prop-types: needs no introduction

react: needs no introduction

react-dom: needs no introduction

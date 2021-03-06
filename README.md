###### npm package: biplane-uikit

to build package:
`npm i` or `yarn install`

then `npm run build` or `yarn build`

to look at examples, run `npm run example` or `yarn example` after installing

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

###### EditableTextarea
Textarea with editable - readonly toggler
Feel free to override "min-height" on the `bui-editable-box` element - textarea won't stretch itself automatically with content growth

Props:
* readOnly: boolean - is field editable, also disables hover
* value: string
* onChange: function(value: string) - event triggering on textarea change

###### EditableTagbox
Editable list of tags that user can add to / delete from

Props:
* readOnly: boolean - is field editable, also disables hover
* tags: array of string - tag list, every item must be unique
* onChange: function(tags: arrayOf(string)) - event triggering on user creating / deleting a tag
* newTagPlaceholder: string - placeholder for new tag input
* maxCount: number - max number of tags user can create, should be >= than `tags` length

#### Importing
###### ES6:

import {Button} from 'biplane-uikit';

...

###### CSS:

@import 'biplane-uikit/lib/colors.css';

@import 'biplane-uikit/lib/variabled.css';


#### Dependencies:

classnames: lib for combining classNames with ease

prop-types: needs no introduction

react: needs no introduction

react-dom: needs no introduction

const components = {
    Avatar: {
        textProps: ['size'],
        mockProps: ['contact={contactObject} OR username="username"'],
        bools: ['clickable', 'tooltip'],

        instructions: [
            '____STRING PROPS_______________________________________',
            'size: tiny, small, medium(default), large, full',
            '____BOOL PROPS_________________________________________',
            'clickable: click to open user profile in Dialog (not working in playground)',
            'tooltip: will show user fullname in Tooltip'
        ]
    },

    Button: {
        textProps: ['label', 'icon', 'customIcon', 'theme', 'tooltip', 'tooltipPosition', 'tooltipSize'],
        bools: ['disabled', 'selected', 'active'],

        instructions: [
            '____STRING PROPS_______________________________________',
            'label: text content of label',
            'icon: MaterialIcon name (e.g. person_add)',
            'customIcon: CustomIcon name (e.g. pin-off-hover)',
            'theme: styling (primary, secondary, inverted, affirmative, small, link, no-hover)',
            'tooltip: text content',
            'tooltipPosition: e.g. top(default), right, bottom, left',
            'tooltipSize: size of tooltip (small; leave blank for default)',

            '____BOOL PROPS_________________________________________',
            'disabled: button greyed out and unclickable',
            'selected: makes button peerio-blue',
            'active: makes button peerio-teal'
        ]
    },

    Checkbox: {
        textProps: ['label'],
        mockProps: ['onChange={function}', 'checked={boolean}'],
        bools: ['disabled'],

        instructions: [
            'The parent component needs to pass the `onChange` function and `checked` bool (observable) to Checkbox in order for it to work.',
            'Checkbox can also be disabled with `disable` bool.'
        ]
    },

    Chip: {
        textProps: [],
        bools: ['deletable'],
        mockProps: ['onDeleteClick={function}'],
        'childContent': 'Child content',

        instructions: [
            'Chip can be made `deletable`. Requires `onDeleteClick` function that removes the component.'
        ]
    },

    CustomIcon: {
        textProps: ['icon', 'size'],
        mockProps: ['hover={boolean // see instructions}'],
        bools: ['selected', 'active'],

        instructions: [
            '____STRING PROPS_______________________________________',
            'icon: filename without ext (e.g. pin-off-hover)',
            'size: small, medium(default)',

            '____BOOL PROPS_________________________________________',
            'hover: enables hover effect; hover actually loads a different image file; requires parent with .custom-icon-hover-container class',
            'active: forces "active" style i.e. opacity:1'
        ]
    },

    Dialog: {
        textProps: ['theme', 'title'],
        mockProps: [
            'active={boolean}',
            'onCancel={function}',
            'actions={[{ label: string, onClick: function }, ...]}'
        ],
        bools: ['noAnimation'],
        'childContent': 'Any HTML content can go in here',

        instructions: [
            '____STRING & OBJECT PROPS______________________________',
            'theme: stripe colour (e.g. error, warning, primary); leave blank for none',
            'title: large text at top of Dialog',
            'actions: array of objects corresponding to the Dialog\'s buttons',

            '____FUNCTIONS__________________________________________',
            'onCancel: behaviour for Esc key and overlay click. needs to correspond to `active` prop',

            '____BOOL PROPS_________________________________________',
            'active: show or hide Dialog',
            'noAnimation: sometimes don\'t want fade in/out fx, e.g. transitioning between Dialogs'
        ]
    },

    Dropdown: {
        textProps: ['label'],
        mockProps: [
            'value="string"',
            'options={[{ value: string, label: string }, ...]}',
            'onChange={function}'
        ],
        bools: [],

        instructions: [
            '`value` should be observable; represents the currently selected entry.',
            '`onChange` function will pass selected `options` entry to parent, which can set `value` to equal that entry.'
        ]
    },

    Input: {
        textProps: ['type', 'placeholder', 'label', 'hint', 'error', 'maxLength'],
        mockProps: ['onBlur={function}', 'onFocus={function}', 'onChange={function}', 'onKey[Press/Up/Down]={function}'],
        bools: ['autofocus', 'disabled', 'readOnly', 'multiline'],

        instructions: [
            'This is the monster component but the props should be mostly self-explanatory.',
            'In-app there are two components that extend this: BetterInput and ValidatedInput. They are much more complex and rely on things like validation from server, so they can\'t be demoed here.',
            'The styling on this component is slightly off in playground and I\'m not sure why (e.g. `hint` positioning). Investigating.'
        ]
    },

    ListItem: {
        textProps: ['caption', 'legend', 'leftContent', 'leftIcon', 'rightContent', 'rightIcon'],
        mockProps: ['onClick="{function}"'],
        bools: ['disabled'],

        instructions: [
            'Bit of an annoying component, maybe the least intuitive, because it is used for many very different things throughout the app.',
            '<ListItem>, <ListHeading>, <Divider> are placed inside a <List>.',
            '`caption` and `legend` are the main, central ListItem content. You can alternatively use the child content between ListItem tags, but if `caption` exists, child content will not be shown.',
            '`leftContent` and `rightContent` are the smaller content to the left/right of the main content. They can be any HTML/JSX content (e.g. Avatar, Menu). `leftIcon` and `rightIcon` will replace these with MaterialIcon.'
        ]
    },

    MaterialIcon: {
        textProps: ['icon', 'tooltip', 'tooltipPosition'],
        bools: ['active'],

        instructions: [
            '____STRING PROPS_______________________________________',
            'icon: Material Icon name with underscores (e.g. person_add)',
            'tooltip: text content',
            'tooltipPosition: e.g. top(default), right, bottom, left',

            '____BOOL PROPS_________________________________________',
            'active: default false; set to true to force "active" style (peerio-teal)'
        ]
    },

    Menu: {
        textProps: ['position', 'icon', 'customIcon', 'customButton', 'tooltip', 'tooltipPosition'],
        bools: ['disabled'],

        instructions: [
            'Working on this one. Stay tuned.',
            '<Menu> produces both the menu button and the menu itself. This can be confusing because props will correspond to one or the other and you have to just know which is which.',
            '<MenuItem> and <Divider> are nested inside the Menu tags, and these become the menu itself via portal. (For now, MenuItem is given a separate demo.)',

            '____STRING PROPS_______________________________________',
            'position: the starting "anchor" of the menu, format `vertical-horizontal`. somewhat counterintuitive (e.g. default "top-left" means menu will be drawn starting from top left of menu button, but will actually drop down and to the right)',
            'icon, customIcon, customButton: menu button can be (respectively) Material Icon, Custom Icon, or arbitrary HTML/JSX',
            'tooltip: text content',
            'tooltipPosition: e.g. top(default), right, bottom, left',

            '____FUNCTIONS__________________________________________',
            'onClick: use this very rarely, e.g. to stopPropagation of other click events',

            '____BOOL PROPS_________________________________________',
            'disable'
        ]
    },

    MenuItem: {
        textProps: ['caption', 'icon', 'customIcon'],
        mockProps: ['value="string"', 'onClick={function}'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            'caption: main text of item',
            'icon: Material Icon left of caption',
            'customIcon: Custom Icon left of caption (regular `icon` overrides this)',
            'value: this is what gets passed to parent via onClick',

            '____FUNCTIONS__________________________________________',
            'onClick: to handle `value` in parent component'
        ]
    },

    ProgressBar: {
        textProps: ['mode', 'type', 'theme', 'value', 'max'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            'mode: determinate(default), indeterminate',
            'type: linear(default), circular',
            'theme: multicolor, small',

            '____INT PROPS__________________________________________',
            'value: (determinate) current progress',
            'max: (determinate) max progress',

            '____ADDITIONAL NOTES___________________________________',
            '- `determinate` + `circular` doesn\'t exist',
            '- `circular` doesn\'t work in Firefox for some reason'
        ]
    },

    RadioButtons: {
        textProps: [],
        mockProps: ['value="string"', 'options=[{ value: string, label: string } ...]', 'onChange="function"'],
        bools: [],

        instructions: [
            'Similar to all the other input type components. You need an observable `value` which can be modified by an `onChange` function, which sets that `value` to the selected entry from `options`.'
        ]
    },

    Switch: {
        textProps: ['label'],
        mockProps: ['checked={bool}', 'onChange={function}'],
        bools: [],

        instructions: [
            'Pardon the weird spacing here. Currently this component is only used in Settings and apparently the container width is hardcoded into the component style itself. The weird 2px width change also does not happen in app.',
            'To make the switch work, parent needs observable bool `checked` toggled by `onChange` function.'
        ]
    }
};

module.exports = components;

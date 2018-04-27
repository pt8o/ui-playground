const components = {
    Avatar: {
        textProps: ['size'],
        mockProps: ['contact={contactObject} OR username="username"'],
        bools: ['clickable', 'tooltip'],

        instructions: [
            '____STRING PROPS_______________________________________',
            'size: tiny, small, medium (default), large, full',
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
            'tooltip: text content of tooltip',
            'tooltipPosition: position of tooltip (top (default), right, bottom, left)',
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
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    CustomIcon: {
        textProps: ['icon', 'size'],
        mockProps: ['hover={boolean // see instructions}'],
        bools: ['selected', 'active'],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
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
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
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
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    Input: {
        textProps: ['type', 'placeholder', 'label', 'hint', 'error', 'maxLength'],
        mockProps: ['onBlur={function}', 'onFocus={function}', 'onChange={function}', 'onKey[Press/Up/Down]={function}'],
        bools: ['autofocus', 'disabled', 'readOnly', 'multiline'],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    ListItem: {
        textProps: ['caption', 'legend', 'leftContent', 'leftIcon', 'rightContent', 'rightIcon'],
        mockProps: ['onClick="{function}"'],
        bools: ['disabled'],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    MaterialIcon: {
        textProps: ['icon', 'tooltip', 'tooltipPosition'],
        bools: ['active'],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    Menu: {
        textProps: ['position', 'icon', 'customIcon', 'customButton', 'tooltip', 'tooltipPosition'],
        bools: ['disabled'],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    MenuItem: {
        textProps: ['caption', 'icon', 'customIcon'],
        mockProps: ['value="string"'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    ProgressBar: {
        textProps: ['mode', 'type', 'theme', 'value', 'max'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    RadioButtons: {
        textProps: [],
        mockProps: ['value="string"', 'options=[{ value: string, label: string } ...]', 'onChange="function"'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    },

    Switch: {
        textProps: ['label'],
        mockProps: ['checked={bool}', 'onChange={function}'],
        bools: [],

        instructions: [
            '____STRING PROPS_______________________________________',
            '',

            '____BOOL PROPS_________________________________________',
            ''
        ]
    }
};

module.exports = components;

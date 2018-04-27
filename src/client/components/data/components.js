const components = {
    Avatar: {
        textProps: ['size'],
        mockProps: ['contact={contactObject} OR username="username"'],
        bools: ['clickable', 'tooltip'],

        instructions: [
            'Test'
        ]
    },

    Button: {
        textProps: ['label', 'icon', 'customIcon', 'theme', 'tooltip', 'tooltipPosition', 'tooltipSize'],
        bools: ['disabled', 'selected', 'active'],

        instructions: [
            ''
        ]
    },

    Checkbox: {
        textProps: ['label'],
        bools: ['disabled'],

        instructions: [
            ''
        ]
    },

    Chip: {
        textProps: [],
        bools: ['deletable'],
        mockProps: ['onDeleteClick={function}'],
        'childContent': 'Child content',

        instructions: [
            ''
        ]
    },

    CustomIcon: {
        textProps: ['icon', 'size'],
        mockProps: ['hover={boolean // see instructions}'],
        bools: ['selected', 'active'],

        instructions: [
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
            ''
        ]
    },

    Input: {
        textProps: ['type', 'placeholder', 'label', 'hint', 'error', 'maxLength'],
        mockProps: ['onBlur={function}', 'onFocus={function}', 'onChange={function}', 'onKey[Press/Up/Down]={function}'],
        bools: ['autofocus', 'disabled', 'readOnly', 'multiline'],

        instructions: [
            ''
        ]
    },

    ListItem: {
        textProps: ['caption', 'legend', 'leftContent', 'leftIcon', 'rightContent', 'rightIcon'],
        mockProps: ['onClick="{function}"'],
        bools: ['disabled'],

        instructions: [
            ''
        ]
    },

    MaterialIcon: {
        textProps: ['icon', 'tooltip', 'tooltipPosition'],
        bools: ['active'],

        instructions: [
            ''
        ]
    },

    Menu: {
        textProps: ['position', 'icon', 'customIcon', 'customButton', 'tooltip', 'tooltipPosition'],
        bools: ['disabled'],

        instructions: [
            ''
        ]
    },

    MenuItem: {
        textProps: ['caption', 'icon', 'customIcon'],
        mockProps: ['value="string"'],
        bools: [],

        instructions: [
            ''
        ]
    },

    ProgressBar: {
        textProps: ['mode', 'type', 'theme', 'value', 'max'],
        bools: [],

        instructions: [
            ''
        ]
    },

    RadioButtons: {
        textProps: [],
        mockProps: ['value="string"', 'options=[{ value: string, label: string } ...]', 'onChange="function"'],
        bools: [],

        instructions: [
            ''
        ]
    },

    Switch: {
        textProps: ['label'],
        mockProps: ['checked={bool}', 'onChange={function}'],
        bools: [],

        instructions: [
            ''
        ]
    }
};

module.exports = components;

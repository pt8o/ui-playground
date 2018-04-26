const components = {
    'Avatar': {
        'textProps': ['size'],
        'mockProps': ['contact={contactObject} OR username="username"'],
        'bools': ['clickable', 'tooltip']
    },

    'Button': {
        'textProps': ['label', 'icon', 'customIcon', 'theme', 'tooltip', 'tooltipPosition', 'tooltipSize'],
        'bools': ['disabled', 'selected', 'active']
    },

    'Checkbox': {
        'textProps': ['label'],
        'bools': ['disabled']
    },

    'Chip': {
        'textProps': [],
        'bools': ['deletable'],
        'childContent': 'Child content'
    },

    'CustomIcon': {
        'textProps': ['icon', 'size'],
        'mockProps': ['hover={boolean // see instructions}'],
        'bools': ['selected', 'active']
    },

    'Dialog': {
        'textProps': ['theme', 'title'],
        'mockProps': [
            'active={boolean}',
            'onCancel={function}',
            'actions={[{ label: string, onClick: function }, ...]}'
        ],
        'bools': ['noAnimation'],
        'childContent': 'Any HTML content can go in here'
    },

    'Dropdown': {
        'textProps': ['label'],
        'mockProps': [
            'value="string"',
            'options={[{ value: string, label: string }, ...]}',
            'onChange={function}'
        ],
        'bools': []
    },

    'Input': {
        'textProps': ['type', 'placeholder', 'label', 'hint', 'error', 'maxLength'],
        'mockProps': ['onBlur={function}', 'onFocus={function}', 'onChange={function}', 'onKey[Press/Up/Down]={function}'],
        'bools': ['autofocus', 'disabled', 'readOnly', 'multiline']
    },

    'ListItem': {
        'textProps': ['caption', 'legend', 'leftContent', 'leftIcon', 'rightContent', 'rightIcon'],
        'mockProps': ['onClick="{function}"'],
        'bools': ['disabled']
    },

    'MaterialIcon': {
        'textProps': ['icon', 'tooltip', 'tooltipPosition'],
        'bools': ['active']
    },

    'Menu': {
        'textProps': ['position', 'icon', 'customIcon', 'customButton', 'tooltip', 'tooltipPosition'],
        'bools': ['disabled']
    },

    'MenuItem': {
        'textProps': ['caption', 'icon', 'customIcon'],
        'mockProps': ['value="string"'],
        'bools': []
    },

    'ProgressBar': {
        'textProps': ['mode', 'type', 'theme', 'value', 'max'],
        'bools': []
    },

    'RadioButtons': {
        'textProps': [],
        'mockProps': ['value="string"', 'options=[{ value: string, label: string } ...]', 'onChange="function"'],
        'bools': []
    },

    'Switch': {
        'textProps': ['label'],
        'mockProps': ['checked={bool}', 'onChange={function}'],
        'bools': []
    }
};

module.exports = components;

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

    'CustomIcon': {'textProps': [], 'bools': []},

    'Dialog': {
        'textProps': ['theme', 'title'],
        'mockProps': [
            'active={boolean}',
            'onCancel={function}',
            'actions={[{ label: string, onClick: function }, ...]}'
        ],
        'bools': ['active', 'noAnimation'],
        'childContent': 'Any HTML content can go in here'
    },

    'Dropdown': {
        'textProps': [],
        'mockProps': [
            'value="string"',
            'options={[{ value: string, label: string }, ...]}'
        ],
        'bools': []
    },

    'Input': {'textProps': [], 'bools': []},
    'List': {'textProps': [], 'bools': []},
    'MaterialIcon': {'textProps': [], 'bools': []},
    'Menu': {'textProps': [], 'bools': []},
    'ProgressBar': {'textProps': [], 'bools': []},
    'RadioButtons': {'textProps': [], 'bools': []},
    'Switch': {'textProps': [], 'bools': []}
};

module.exports = components;

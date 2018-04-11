const React = require('react');
const { render } = require('react-dom');

const { action, computed, observable } = require('mobx');
const { observer } = require('mobx-react');

const ComponentSelector = require('./ComponentSelector');
const ComponentPlayground = require('./ComponentPlayground');

const options = {
    'Avatar': {
        'textProps': ['size'],
        'mockProps': ['contact={contactObject} OR username="username"'],
        'bools': ['clickable', 'tooltip']
    },
    'Button': {
        'textProps': ['label', 'icon', 'customIcon', 'theme'],
        'bools': ['disabled', 'selected', 'active']
    },
    'Checkbox': {'textProps': [], 'bools': []},
    'Chip': {'textProps': [], 'bools': []},
    'CustomIcon': {'textProps': [], 'bools': []},
    'Dialog': {'textProps': [], 'bools': []},
    'Dropdown': {'textProps': [], 'bools': []},
    'Input': {'textProps': [], 'bools': []},
    'List': {'textProps': [], 'bools': []},
    'MaterialIcon': {'textProps': [], 'bools': []},
    'Menu': {'textProps': [], 'bools': []},
    'ProgressBar': {'textProps': [], 'bools': []},
    'RadioButtons': {'textProps': [], 'bools': []},
    'Switch': {'textProps': [], 'bools': []}
};

@observer
class Index extends React.Component {
    @observable selectorRef;
    @action.bound setSelectorRef(ref) { if (ref) this.selectorRef = ref; }
    @computed get selected() {
        // if (this.selectorRef) {
        //     return this.selectorRef.selected;
        // }
        return 'Button'
    }

    render() {
        return(
            <div className="pup-container">
                <div className="sidebar-left">
                    <div className="pup-logo">
                        <div className="main-title">
                            PeerUI
                        </div>
                        <div className="sub-title">
                            Playground
                        </div>
                    </div>

                    <ComponentSelector options={options} ref={this.setSelectorRef}/>
                </div>

                <ComponentPlayground options={options} selected={this.selected} />
            </div>
        );
    }
}

render(<Index />, document.getElementById('app'));

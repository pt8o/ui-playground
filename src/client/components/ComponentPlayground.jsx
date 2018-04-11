const React = require('react');
const { render } = require('react-dom');

const { action, computed, observable } = require('mobx');
const { observer } = require('mobx-react');

const { Button } = require('~/peer-ui');

const instructions = {
    'Avatar': '',
    'Button': '',
    'Checkbox': '',
    'Chip': '',
    'CustomIcon': '',
    'Dialog': '',
    'Dropdown': '',
    'Input': '',
    'List': '',
    'MaterialIcon': '',
    'Menu': '',
    'ProgressBar': '',
    'RadioButtons': '',
    'Switch': ''
}

@observer
class ComponentPlayground extends React.Component {
    @observable href;

    @observable label;
    @action.bound labelChange(ev) {
        this.label = ev.target.value;
    }

    @observable icon;
    @action.bound iconChange(ev) {
        this.icon = ev.target.value;
    }

    @observable theme;
    @action.bound themeChange(ev) {
        this.theme = ev.target.value;
    }

    @computed get properties() {
        return {
            label: this.label,
            icon: this.icon,
            customIcon: this.customIcon,
            theme: this.theme
        }
    }

    // constructor() {
    //     super();
    //     ['mail', 'chats', 'files', 'contacts', 'profile', 'security', 'prefs', 'account', 'about', 'help', 'onboarding']
    //         .forEach(route => {
    //             this[`to${route[0].toUpperCase()}${route.slice(1)}`] = () => {
    //                 routerStore.navigateTo(routerStore.ROUTES[route]);
    //             };
    //         });
    // }

    @computed get codeBlock() {

    }


    render() {
        if (!this.props.selected) return null;

        return(
            <div className="pup-playground">
                <div className="playground-header">
                    <a href={`../src/ui-library/${this.props.selected}.jsx`}>view code</a>
                </div>
                <div className="playground-code">
                    &lt;{this.props.selected}<br/>
                    &nbsp;&nbsp;label="<input onChange={this.labelChange}/>"<br/>
                    &nbsp;&nbsp;icon="<input onChange={this.iconChange}/>"<br/>
                    &nbsp;&nbsp;customIcon=""<br/>
                    &nbsp;&nbsp;theme="<input onChange={this.themeChange}/>"<br/>
                    /&gt;
                </div>
                <div className="component-preview">
                    <div className="component-result caps-heading">
                        Result:
                    </div>
                    <div className="component-itself">
                        <Button
                            {...this.properties}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ComponentPlayground;

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
    // TODO: Is there a way to declare these in constructor()? Couldn't figure out how to do it bc of @observable, @action.bound, and (ev).
    @observable label; @action.bound labelChange(ev) { this.label = ev.target.value; }
    @observable icon; @action.bound iconChange(ev) { this.icon = ev.target.value; }
    @observable customIcon; @action.bound iconChange(ev) { this.customIcon = ev.target.value; }
    @observable theme; @action.bound themeChange(ev) { this.theme = ev.target.value; }

    @computed get properties() {
        const obj = {};
        const selected = this.props.options[this.props.selected];

        selected.textProps.forEach(prop => {
            obj[prop] = this[prop];
        });

        return obj;
    }

    @computed get codeBlock() {
        const block = [];
        const selected = this.props.options[this.props.selected];

        selected.textProps.forEach(prop => {
            block.push(
                <div>
                    <label key={`${this.props.selected}-${prop}-label`}>{`${prop}=`}</label>
                    <input key={`${this.props.selected}-${prop}-input`} onChange={this[`${prop}Change`]}/>
                </div>
            );
        });

        return block;
    }

    render() {
        if (!this.props.selected) return null;

        return(
            <div className="pup-playground">
                <div className="playground-header">
                    <a href={`../src/ui-library/${this.props.selected}.jsx`}>view code</a>
                </div>
                <div className="playground-code">
                    &lt;{this.props.selected}
                        {this.codeBlock}
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

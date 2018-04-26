const React = require('react');

const { action, computed, observable, reaction } = require('mobx');
const { observer } = require('mobx-react');

const BoolSelector = require('./BoolSelector');
const { Avatar, Button, Checkbox, Chip, CustomIcon, Dialog, Divider, Dropdown, Input, List, ListHeading, ListItem, MaterialIcon, Menu, MenuItem, ProgressBar, RadioButtons, Switch, Tooltip } = require('~/peer-ui');

const { genericContact, genericOptions } = require('./data/generic-data');
const propertyArray = require('./data/property-array');

@observer
class ComponentPlayground extends React.Component {
    @observable genericValue = '';
    @action.bound genericOnChange(val) {this.genericValue = val };

    @observable genericBool = false;
    @action.bound genericToggle() { this.genericBool = !this.genericBool };
    genericActions = [
        { label: 'Cancel', onClick: this.genericToggle },
        { label: 'OK', onClick: this.genericToggle }
    ]

    constructor() {
        super();

        this.propertyMap = observable.map();
        propertyArray.forEach(prop => {
            this.propertyMap.set(prop, '');
            this[`${prop}Change`] = action((ev) => this.propertyMap.set(prop, ev.target.value));
        });
    }

    componentDidMount() {
        // clear all observables whenever a new component is selected from the sidebar
        this.disposer = reaction(() => this.props.selected, () => {
            this.propertyMap.keys().forEach(key => this.propertyMap.set(key, ''));
            this.boolMap.clear();
            this.genericValue = '';
            this.genericBool = false;
        });
    }

    componentWillUnmount() {
        if (this.disposer) this.disposer();
        this.disposer = null;
    }

    @computed get selected() {
        return this.props.options[this.props.selected];
    }

    @computed get properties() {
        const obj = {};
        const selected = this.selected;

        selected.textProps.forEach(prop => {
            obj[prop] = this.propertyMap.get(prop);
        });

        selected.bools.forEach(prop => {
            obj[prop] = this.boolMap.get(prop);
        });

        return obj;
    }

    @observable boolMap = new Map();
    @action.bound toggleBool(prop) {
        const currentState = this.boolMap.get(prop);
        this.boolMap.set(prop, !currentState);
    }

    @computed get codeBlock() {
        const block = [];
        const selected = this.selected;

        if (!!selected.textProps) {
            selected.textProps.forEach(prop => {
                block.push(
                    <div className="property" key={`${this.props.selected}-${prop}-div`}>
                        <label key={`${this.props.selected}-${prop}-label`}>{`${prop}="`}</label>
                        <input key={`${this.props.selected}-${prop}-input`} onChange={this[`${prop}Change`]}/><label>"</label>
                    </div>
                );
            });
        }

        if (!!selected.mockProps) {
            selected.mockProps.forEach(prop => {
                block.push(
                    <div className="property label" key={`${this.props.selected}-${prop}-mockprop`}>{prop}</div>
                );
            });
        }

        if (!!selected.bools) {
            selected.bools.forEach(prop => {
                block.push(
                    <div className="property" key={`${this.props.selected}-${prop}-bool`}>
                        <BoolSelector
                            name={prop}
                            active={this.boolMap.get(prop)}
                            onToggle={() => this.toggleBool(prop)}
                        />
                    </div>
                );
            });
        }

        if (!!selected.childContent) {
            return (
                <div className="code-itself">
                    &lt;
                    <span className="component-name">{this.props.selected}</span>
                    {block}
                    &gt;
                    <br/>
                    <span className="child-content">{selected.childContent}</span>
                    <br/>
                    &lt;/
                    <span className="component-name">{this.props.selected}</span>
                    &gt;
                </div>
            );
        } else {
            return (
                <div className="code-itself">
                    &lt;
                    <span className="component-name">{this.props.selected}</span>
                    {block}
                    /&gt;
                </div>
            );
        }
    }

    render() {
        if (!this.props.selected) return null;

        return(
            <div className="pup-playground">
                <div className="playground-code">
                    <div className="caps-heading">JSX:</div>
                    {this.codeBlock}
                </div>
                <div className="component-preview">
                    <div className="caps-heading">Result:</div>
                    <div className="component-itself">
                        {this.props.selected === 'Avatar' && <Avatar contact={genericContact} {...this.properties} /> }

                        {this.props.selected === 'Button' && <Button {...this.properties} />}

                        {this.props.selected === 'Checkbox' &&
                            <Checkbox
                                checked={this.genericBool}
                                onChange={this.genericToggle}
                                {...this.properties}
                            />
                        }

                        {this.props.selected === 'Chip' &&
                            <Chip {...this.properties}>
                                {this.props.options[this.props.selected].childContent}
                            </Chip>
                        }

                        {this.props.selected === 'CustomIcon' && <CustomIcon {...this.properties} />}

                        {this.props.selected === 'Dialog' &&
                            <div>
                            <Dialog
                                active={this.genericBool}
                                onCancel={this.genericToggle}
                                actions={this.genericActions}
                                {...this.properties}
                            >
                                {this.props.options[this.props.selected].childContent}
                            </Dialog>
                            <Button onClick={this.genericToggle}>Show</Button>
                            </div>
                        }

                        {this.props.selected === 'Dropdown' &&
                            <Dropdown
                                onChange={this.genericOnChange}
                                value={this.genericValue || 'item1'}
                                options={genericOptions}
                                {...this.properties}
                            />
                        }

                        {this.props.selected === 'Input' &&
                            <Input
                                value={this.genericValue}
                                onChange={this.genericOnChange}
                                {...this.properties}
                            />
                        }

                        {this.props.selected === 'ListItem' &&
                            <List>
                                <ListItem {...this.properties} />
                            </List>
                        }

                        {this.props.selected === 'MaterialIcon' && <MaterialIcon {...this.properties} />}

                        {this.props.selected === 'Menu' &&
                            // <Menu {...this.properties} />
                            <div>(unavailable; see instructions)</div>
                        }

                        {this.props.selected === 'MenuItem' &&
                            <Menu icon="menu" position="top-left">
                                <MenuItem {...this.properties} />
                            </Menu>
                        }

                        {this.props.selected === 'ProgressBar' && <ProgressBar {...this.properties} />}

                        {this.props.selected === 'RadioButtons' &&
                            <RadioButtons
                                onChange={this.genericOnChange}
                                value={this.genericValue}
                                options={genericOptions}
                                {...this.properties}
                            />
                        }

                        {this.props.selected === 'Switch' &&
                            <Switch
                                checked={this.genericBool}
                                onChange={this.genericToggle}
                                {...this.properties}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ComponentPlayground;

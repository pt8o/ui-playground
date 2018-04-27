const React = require('react');

const { action, computed, observable, reaction } = require('mobx');
const { observer } = require('mobx-react');

const BoolSelector = require('./BoolSelector');
const { Avatar, Button, Checkbox, Chip, CustomIcon, Dialog, Divider, Dropdown, Input, List, ListHeading, ListItem, MaterialIcon, Menu, MenuItem, ProgressBar, RadioButtons, Switch, Tooltip } = require('~/peer-ui');

const propertyArray = require('./data/property-array');
const { genericContact, genericOptions } = require('./data/generic-data');

@observer
class ComponentPlayground extends React.Component {
    // Generic observables to reuse across multiple components
    @observable genericValue = '';
    @action.bound genericOnChange(val) {this.genericValue = val };

    @observable genericBool = false;
    @action.bound genericToggle() { this.genericBool = !this.genericBool };

    genericActions = [
        { label: 'Cancel', onClick: this.genericToggle },
        { label: 'OK', onClick: this.genericToggle }
    ];

    // For the 'instructions' section
    @observable instructionsOpen = false;
    @observable instructionsOpenedOnce = false;
    @action.bound toggleInstructions() {
        this.instructionsOpen = !this.instructionsOpen;
        this.instructionsOpenedOnce = true;
    }

    constructor() {
        super();

        // Based on propertyArray object, create propertyMap observable map and 'onChange' function for each
        this.propertyMap = observable.map();
        propertyArray.forEach(prop => {
            this.propertyMap.set(prop, '');
            this[`${prop}Change`] = action((ev) => this.propertyMap.set(prop, ev.target.value));
        });
    }

    componentDidMount() {
        // Clear all observables whenever a new component is selected from the sidebar
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

    // Create a single "properties" object to feed to the currently selected component
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

    // Keep track of the boolean prop states with another observable map
    @observable boolMap = new Map();
    @action.bound toggleBool(prop) {
        const currentState = this.boolMap.get(prop);
        this.boolMap.set(prop, !currentState);
    }

    // `codeBlock` is the part that looks like code, which the user can interact with to change the component
    @computed get codeBlock() {
        const lines = [];
        const selected = this.selected;

        // String props you can change by typing
        if (!!selected.textProps) {
            selected.textProps.forEach(prop => {
                lines.push(
                    <div className="property" key={`${this.props.selected}-${prop}-div`}>
                        <label key={`${this.props.selected}-${prop}-label`}>{`${prop}="`}</label>
                        <input key={`${this.props.selected}-${prop}-input`} onChange={this[`${prop}Change`]}/><label>"</label>
                    </div>
                );
            });
        }

        // Placeholders for props that exist in the real app but you can't modify here (e.g. functions)
        if (!!selected.mockProps) {
            selected.mockProps.forEach(prop => {
                lines.push(
                    <div className="property label" key={`${this.props.selected}-${prop}-mockprop`}>{prop}</div>
                );
            });
        }

        // Boolean props that you can toggle by clicking
        if (!!selected.bools) {
            selected.bools.forEach(prop => {
                lines.push(
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

        // Some components allow the use of child content via {this.props.children}. Here, mocked up with preset text.
        if (!!selected.childContent) {
            return (
                <div className="code-itself">
                    &lt;
                    <span className="component-name">{this.props.selected}</span>
                    {lines}
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
                    {lines}
                    /&gt;
                </div>
            );
        }
    }

    @computed get instructions() {
        if (!this.selected) return;
        return this.selected.instructions.map((p, i) => {
            return (<div key={`instruction-${i}`}>{p}</div>);
        });
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

                        {this.instructions &&
                            <div className={this.instructionsOpen ? 'instructions open' : 'instructions'}>
                                <button className="instructions-toggle" onClick={this.toggleInstructions}>
                                    <MaterialIcon icon={ this.instructionsOpen
                                        ? 'keyboard_arrow_down'
                                        : 'keyboard_arrow_up'
                                    }/><br/>
                                    <div className={this.instructionsOpenedOnce ? 'caps-heading hide' : 'caps-heading'}>Instructions</div>
                                </button>
                                <div className="caps-heading">Instructions:</div>
                                <div className="text-content">{this.instructions}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ComponentPlayground;

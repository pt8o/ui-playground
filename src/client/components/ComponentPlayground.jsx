const React = require('react');
const { render } = require('react-dom');

const { action, computed, observable } = require('mobx');
const { observer } = require('mobx-react');

const { Avatar, Button, Checkbox, Chip, CustomIcon, Dialog, Divider, Dropdown, Input, List, ListHeading, ListItem, MaterialIcon, Menu, MenuItem, ProgressBar, RadioButtons, Switch, Tooltip } = require('~/peer-ui');

// const instructions = {
//     'Avatar': '',
//     'Button': '',
//     'Checkbox': '',
//     'Chip': '',
//     'CustomIcon': '',
//     'Dialog': '',
//     'Dropdown': '',
//     'Input': '',
//     'List': '',
//     'MaterialIcon': '',
//     'Menu': '',
//     'ProgressBar': '',
//     'RadioButtons': '',
//     'Switch': ''
// };

const propertyArray = [
    'label',
    'icon',
    'customIcon',
    'theme',
    'size',
    'tooltip',
    'tooltipPosition',
    'tooltipSize'
];

const genericContact = {
    hasAvatar: false,
    color: 'red',
    username: 'uiplayground',
    letter: 'U',
    fullNameAndUsername: 'UI Playground'
};

const genericOptions = [
    { value: 'item1', label: 'First item' },
    { value: 'item2', label: 'Second item' },
    { value: 'item3', label: 'Third item' },
    { value: 'item4', label: 'Fourth item' }
];

@observer
class ComponentPlayground extends React.Component {
    @observable genericValue = '';
    @action.bound genericOnChange(val) {this.genericValue = val };

    @observable genericBool = false;
    @action.bound genericToggle(val) { this.genericBool = !this.genericBool };

    constructor() {
        super();
        this.propertyMap = observable.map();

        propertyArray.forEach(prop => {
            this.propertyMap.set(prop, '');
            this[`${prop}Change`] = action((ev) => this.propertyMap.set(prop, ev.target.value));
        });
    }

    get properties() {
        const obj = {};
        const selected = this.props.options[this.props.selected];

        selected.textProps.forEach(prop => {
            obj[prop] = this.propertyMap.get(prop);
        });

        return obj;
    }

    get codeBlock() {
        const block = [];
        const selected = this.props.options[this.props.selected];

        if (!!selected.textProps) {
            selected.textProps.forEach(prop => {
                block.push(
                    <div className="property" key={`${this.props.selected}-${prop}-input`}>
                        <label key={`${this.props.selected}-${prop}-label`}>{`${prop}="`}</label>
                        <input key={`${this.props.selected}-${prop}-input`} onChange={this[`${prop}Change`]}/><label>"</label>
                    </div>
                );
            });
        }

        if (!!selected.mockProps) {
            selected.mockProps.forEach(prop => {
                block.push(
                    <div className="property label" key="prop">{prop}</div>
                );
            });
        }

        // if (!!selected.bools) {
        //     selected.bools.forEach(prop => {
        //         block.push(
        //
        //         );
        //     });
        // }

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
                        {/* TODO: ok there has to be a better way to do this??? */}
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
                                Child content
                            </Chip>
                        }
                        {this.props.selected === 'CustomIcon' && <CustomIcon {...this.properties} />}
                        {this.props.selected === 'Dialog' && <Dialog {...this.properties} />}
                        {this.props.selected === 'Dropdown' &&
                            <Dropdown
                                onChange={this.genericOnChange}
                                value={this.genericValue || 'item1'}
                                options={genericOptions}
                                {...this.properties}
                            />
                        }
                        {this.props.selected === 'Input' && <Input {...this.properties} />}
                        {this.props.selected === 'List' &&
                            <List {...this.properties}>
                                <ListHeading>List Heading</ListHeading>
                                <ListItem>Item 1</ListItem>
                                <ListItem>Item 2</ListItem>
                                <ListItem>Item 3</ListItem>
                                <ListHeading>List Heading</ListHeading>
                                <ListItem>Item 4</ListItem>
                                <ListItem>Item 5</ListItem>
                            </List>
                        }
                        {this.props.selected === 'MaterialIcon' && <MaterialIcon {...this.properties} />}
                        {this.props.selected === 'Menu' && <Menu {...this.properties} />}
                        {this.props.selected === 'ProgressBar' && <ProgressBar {...this.properties} />}
                        {this.props.selected === 'RadioButtons' &&
                            <RadioButtons
                                onChange={this.genericOnChange}
                                value={this.genericValue}
                                options={genericOptions}
                                {...this.properties}
                            />
                        }
                        {this.props.selected === 'Switch' && <Switch {...this.properties} />}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ComponentPlayground;

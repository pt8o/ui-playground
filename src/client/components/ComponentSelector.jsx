const React = require('react');
const { render } = require('react-dom');

const { action, observable } = require('mobx');
const { observer } = require('mobx-react');

const optionsList = [
    'Avatar',
    'Button',
    'Checkbox',
    'Chip',
    'CustomIcon',
    'Dialog',
    'Dropdown',
    'Input',
    'List',
    'MaterialIcon',
    'Menu',
    'ProgressBar',
    'RadioButtons',
    'Switch'
];

@observer
class ComponentSelector extends React.Component {
    @observable selected;

    render() {
        const options = optionsList.map(option => {
            return (
                <li
                    key={option}
                    className={ this.selected === option
                        ? "pup-selector-item selected"
                        : "pup-selector-item"
                    }
                    onClick={() => {this.selected = option;}}
                >
                    {option}
                </li>
            );
        });

        return(
            <div className="pup-selector">
                <span className="components-header caps-heading">Select a component:</span>
                <ul>
                    {options}
                </ul>
            </div>
        );
    }
}

module.exports = ComponentSelector;

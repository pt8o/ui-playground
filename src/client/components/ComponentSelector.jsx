const React = require('react');

const { action, observable } = require('mobx');
const { observer } = require('mobx-react');

@observer
class ComponentSelector extends React.Component {
    @observable selected;

    render() {
        const options = Object.keys(this.props.options).map(option => {
            return (
                <button
                    key={option}
                    className={ this.selected === option
                        ? "pup-selector-item selected"
                        : "pup-selector-item"
                    }
                    onClick={() => {this.selected = option;}}
                >
                    {option}
                </button>
            );
        });

        return(
            <div className="pup-selector">
                {/* <span className="components-header caps-heading">Select a component:</span> */}
                <div>
                    {options}
                </div>
            </div>
        );
    }
}

module.exports = ComponentSelector;

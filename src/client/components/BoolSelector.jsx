const React = require('react');
const { observer } = require('mobx-react');
const css = require('classnames');

class BoolSelector extends React.Component {
    render() {
        return(
            <span tabIndex={0}
                className={css(
                    'pup-bool-selector',
                    { active: this.props.active }
                )}
                onClick={this.props.onToggle}
            >
                {this.props.name}
            </span>
        );
    }
}

module.exports = BoolSelector;

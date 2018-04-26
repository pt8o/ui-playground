const React = require('react');
const css = require('classnames');

class BoolSelector extends React.Component {
    render() {
        return(
            <div tabIndex={0}
                className={css(
                    'property',
                    'pup-bool-selector',
                    { active: this.props.active }
                )}
                onClick={this.props.onToggle}
            >
                {this.props.name}
            </div>
        );
    }
}

module.exports = BoolSelector;

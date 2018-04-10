const React = require('react');
const { render } = require('react-dom');

const { action, observable } = require('mobx');
const { observer } = require('mobx-react');

@observer
class ComponentPlayground extends React.Component {

    render() {
        return(
            <div className="pup-playground">
                <span className="caps-heading">Component:</span> <span>{this.props.selected}</span>
            </div>
        );
    }
}

module.exports = ComponentPlayground;

const React = require('react');
const { render } = require('react-dom');

// const { action } = require('mobx');
// const { observer } = require('mobx-react');

const { Button } = require('~/peer-ui.js');

class ComponentSelector extends React.Component {
    items = this.props.items;
    button = this.props.items[0].item;



    render() {
        console.log(this.items);
        return(
            <div className="pup-selector">
            {this.button}
            </div>
        );
    }
}

module.exports = ComponentSelector;

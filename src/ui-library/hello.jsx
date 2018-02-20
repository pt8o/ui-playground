const React = require('react');
const { render } = require('react-dom');

// const { Button } = require('~/peer-ui.js');

class Hello extends React.Component {
    render() {
        return(
            <h1>
                HELLO
            </h1>
        );
    }
}

module.exports = Hello;

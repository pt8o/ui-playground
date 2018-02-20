const React = require('react');
const { render } = require('react-dom');

const { action } = require('mobx');
const { observer } = require('mobx-react');

const Hello = require('~/ui-library/hello')
const { Button } = require('~/peer-ui.js');

@observer
class App extends React.Component {
    render() {
        return(
            <Hello />
        );
    }
}

render(<App />, document.getElementById('app'));

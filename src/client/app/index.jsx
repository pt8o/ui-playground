import React from 'react';
import {render} from 'react-dom';

const Hello = require('./hello.jsx');

class App extends React.Component {
    render() {
        return(
            <Hello />
        );
    }
}

render(<App />, document.getElementById('app'));

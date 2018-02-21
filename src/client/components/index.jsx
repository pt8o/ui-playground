const React = require('react');
const { render } = require('react-dom');

const { observer } = require('mobx-react');

const ComponentSelector = require('./ComponentSelector.jsx');
const { Button } = require('~/peer-ui');

const items = [
    {
        name: 'Button',
        item: <Button label='TEST' theme="affirmative" />,
        props: [
            'test'
        ]
    }
];

@observer
class Index extends React.Component {
    render() {
        return(
            <div className="pup-container">
                <div className="sidebar-left">
                    <div className="pup-logo">
                        <div className="main-title">
                            PeerUI
                        </div>
                        <div className="sub-title">
                            Playground
                        </div>
                    </div>

                    <ComponentSelector items={items}/>
                </div>


            </div>
        );
    }
}

render(<Index />, document.getElementById('app'));

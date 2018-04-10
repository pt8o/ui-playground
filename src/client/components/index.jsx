const React = require('react');
const { render } = require('react-dom');

const { action, computed, observable } = require('mobx');
const { observer } = require('mobx-react');

const ComponentSelector = require('./ComponentSelector');
const ComponentPlayground = require('./ComponentPlayground');
const ButtonView = require('./views/views');

const options = {
    Button: <ButtonView />
};

@observer
class Index extends React.Component {
    @observable selectorRef;
    @action.bound setSelectorRef(ref) { if (ref) this.selectorRef = ref; }
    @computed get selected() {
        if (this.selectorRef) {
            return this.selectorRef.selected;
        }
    }

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

                    <ComponentSelector ref={this.setSelectorRef}/>
                </div>

                <ComponentPlayground selected={this.selected} />
            </div>
        );
    }
}

render(<Index />, document.getElementById('app'));

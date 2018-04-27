const React = require('react');
const { render } = require('react-dom');
const { action, computed, observable } = require('mobx');
const { observer } = require('mobx-react');

const ComponentSelector = require('./ComponentSelector');
const ComponentPlayground = require('./ComponentPlayground');
const { MaterialIcon } = require('~/peer-ui');

const components = require('./data/components');

@observer
class Index extends React.Component {
    @observable selectorRef;
    @action.bound setSelectorRef(ref) { if (ref) this.selectorRef = ref; }
    @computed get selected() {
        return 'Avatar'
        // if (this.selectorRef) {
        //     return this.selectorRef.selected;
        // }
    }

    render() {
        return(
            <div className="pup-container">
                <div className="sidebar-left">
                    <div className="pup-logo">
                        <div className="main-title">PeerUI</div>
                        <div className="sub-title">Playground</div>
                    </div>
                    <ComponentSelector options={components} ref={this.setSelectorRef}/>
                </div>
                <ComponentPlayground options={components} selected={this.selected} />
                <a href="https://github.com/suprko/ui-playground" className="source-link" target="_blank">
                    view <MaterialIcon icon="code"/> on GitHub
                </a>
            </div>
        );
    }
}

render(<Index />, document.getElementById('app'));

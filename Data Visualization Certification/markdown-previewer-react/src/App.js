import React, {Component} from 'react';
import Markup from './Markup';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row col-sm-12 col-md-10 col-md-offset-1">
                        <Markup />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

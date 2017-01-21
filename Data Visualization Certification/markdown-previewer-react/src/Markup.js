import React, {Component} from 'react';
import './Markup.css';
const marked = require('marked');

class Markup extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }

    updateResult(e) {
        const str = e.target.value;
        const text = marked(str);
        this.setState({text});
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Markdown</h3>
                        </div>
                        <div className="panel-body">
                            <textarea onChange={this.updateResult.bind(this)} className="form-control" rows="3"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Result</h3>
                        </div>
                        <div className="panel-body">
                            <div dangerouslySetInnerHTML={{__html: this.state.text}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Markup;

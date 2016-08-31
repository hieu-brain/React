var React = require('react');

var Title = require('./Title');
var Datetime = require('./Datetime');
var Search = require('./Search');

var Header = React.createClass({
    getInitialState: function () {
        return ({
            title: 'Hello React'
        })
    },
    changeHeaderTitle: function (iTitle) {
        console.log(iTitle);
        this.setState({title: iTitle});
        this.props.changedHeaderTitle(iTitle);
    },
    render: function () {
        return (
            <header>
                <div className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar">
                                </span>
                                <span className="icon-bar">
                                </span>
                                <span className="icon-bar">
                                </span>
                            </button>
                            <Title title={this.state.title} link="#"/>
                        </div>
                        <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1"
                             aria-expanded="true">
                            <Search changeTitle={this.changeHeaderTitle}/>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Datetime/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});
// Header
module.exports = Header;
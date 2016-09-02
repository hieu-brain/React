var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var Title = require('./Title');
var Datetime = require('./Datetime');
var Search = require('./Search');
var Router = require('react-router').Router;
var Header = React.createClass({
    getInitialState: function () {
        return ({
            title: this.props.title,
            path: []
        })
    },
    navStop: function () {
        console.log("Stop Back !");
    },
    changeHeaderTitle: function (iTitle) {
        console.log(iTitle);
        this.setState({title: iTitle});
        this.props.changedHeaderTitle(iTitle);
    },
    navigatePrePage: function () {
        // Router.History.back();
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
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/" activeClassName="active">Feature <span
                                    className="sr-only">(current)</span></Link ></li>
                                <li><Link to="/setting" activeClassName="active">Setting</Link ></li>
                                <li className="dropdown">
                                    <Link to="/user" activeClassName="active" className="dropdown-toggle"
                                          data-toggle="dropdown" role="button" aria-expanded="false">User <span
                                        className="caret">
                                    </span></Link >
                                    <ul className="dropdown-menu" role="menu">
                                        <li><Link to="/user/profile" activeClassName="active">Manage User</Link ></li>
                                        <li><Link to="/user/setting" activeClassName="active">Setting User</Link ></li>
                                        <li><Link to="/user/remove" activeClassName="active">Remove User</Link  ></li>
                                    </ul>
                                </li>
                            </ul>
                            <Search changeTitle={this.changeHeaderTitle}/>
                            <ul className="pager nav navbar-nav">
                                <li><a href="#" onClick={this.navigatePrePage}>Previous</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
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
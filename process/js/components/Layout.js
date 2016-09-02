var React = require('react');

var Header = require('./Header/Header');
var Footer = require('./Footer');
var Link = require('react-router').Link;

var Layout = React.createClass({
    getInitialState: function () {
        return ({
            footerTitle: 'Search Result',
            mainTitle: 'Main Layout'
        })
    },
    handleChangeHeaderTitle: function (hTitle) {
        console.log("hTitle", hTitle);
        this.setState({footerTitle: hTitle})
    },
    render: function () {
        return (
            <div>
                <Header changedHeaderTitle={this.handleChangeHeaderTitle} title={this.state.mainTitle}/>
                {this.props.children}
                <Footer searchResult={this.state.footerTitle}/>
            </div>
        );
    }
});
module.exports = Layout;
var React = require('react');

var Header = require('./Header/Header');
var Footer = require('./Footer');
var Layout = React.createClass({
    getInitialState: function () {
        return ({
            footerTitle: 'Search Result'
        })
    },
    handleChangeHeaderTitle: function (hTitle) {
        console.log("hTitle", hTitle);
        this.setState({footerTitle: hTitle})
    },
    render: function () {
        return (
            <div>
                <Header changedHeaderTitle={this.handleChangeHeaderTitle}/>
                <Footer searchResult={this.state.footerTitle}/>
            </div>
        );
    }
});
module.exports = Layout;
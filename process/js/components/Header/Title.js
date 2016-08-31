var React = require('react');

var Title = React.createClass({
    getInitialState: function () {
        return ({
            title: this.props.title,
            link: this.props.link
        })
    },
    render: function () {
        return (
            <a className="navbar-brand" href={this.state.link}>
                <span>{this.props.title}</span>
            </a>
        );
    }
});
module.exports = Title;
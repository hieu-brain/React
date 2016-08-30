var React = require('react');
var ReactDOM = require('react-dom');

var Layout = React.createClass({
    render: function () {
        return (
            <h1>Hello React!</h1>
        );
    }
});//Layout

ReactDOM.render(
    <Layout />,
    document.getElementById('app')
); //render

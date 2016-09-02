var React = require('react');

var User = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="bs-docs-section">
                    <div className="row">
                        <h1>Hello User</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = User;
var React = require('react');

var Setting = React.createClass({
    getInitialState: function () {
        return ({
            footerTitle: 'Search Feature',
            mainTitle: 'Feature'
        })
    },
    handleChangeHeaderTitle: function (hTitle) {
        console.log("hTitle", hTitle);
        this.setState({footerTitle: hTitle})
    },
    render: function () {
        return (
            <div className="container">
                <div className="bs-docs-section">
                    <div className="row">
                        <h1>Hello Setting</h1>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Setting;
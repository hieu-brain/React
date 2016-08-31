var React = require('react');

var Datetime = React.createClass({
    getInitialState: function () {
        return {
            datetime: ''
        };
    },
    getDatetime: function () {
        var d = new Date();
        this.setState({
            datetime: (d.getDate() + 1) + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        })
    },
    render: function () {
        setTimeout(()=> {
            var d = new Date();
            this.setState({
                datetime: (d.getDate()) + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            })
        }, 1000);
        return (
            <a>
                {this.state.datetime}
            </a>
        );
    }
});
// Datetime
module.exports = Datetime;
var React = require('react');

var Search = React.createClass({
    getInitialState: function () {
        return ({
            search: 'Search here..'
        })
    },
    handleChange: function (e) {
        var title = e.target.value;
        this.props.changeTitle(title);
    },
    render: function () {
        return (
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder={this.state.search}
                           onChange={this.handleChange}/>
                </div>
            </form>
        );
    }
});
module.exports = Search;
var React = require('react');

var UserProfileArticle = React.createClass({
    render: function () {
        var title = this.props.title;
        return (
            <div className="col-md-4 m-b-2">
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi
                    non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi
                    dolor consectetur.</p>
                <a className="btn btn-default" href="#">More Info</a>
            </div>
        );
    }
});
module.exports = UserProfileArticle;
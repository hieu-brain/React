var React = require('react');
var UserProfileArticle = require('./UserProfileArticle');

var UserProfile = React.createClass({
    render: function () {
        var Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican Article",
        ].map(function (listValue, e) {
            return <UserProfileArticle key={e} title={listValue}/>;
        });
        return (
            <div className="row">
                {Articles}
            </div>
        );

    }
});
module.exports = UserProfile;
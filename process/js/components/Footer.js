var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <div className="container">
                    <footer>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-unstyled">
                                    <li className="pull-right"><a href="#top">Back to top</a></li>
                                    <li><a href="https://github.com/hieu-brain">GitHub</a></li>
                                </ul>
                                <p>Made by <a href="#" rel="nofollow">Hieu</a>.</p>
                                <p>Search Result <a href="#">{this.props.searchResult}</a></p>
                            </div>
                        </div>
                    </footer>

                </div>
            </footer>
        );
    }
});
// Footer
module.exports = Footer;
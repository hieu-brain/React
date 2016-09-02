var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Layout = require('./components/Layout');
var Feature = require('./components/Pages/Feature');
var Setting = require('./components/Pages/Setting');
var User = require('./components/Pages/User/User');
var UserProfile = require('./components/Pages/User/UserProfile');
var UserSetting = require('./components/Pages/User/UserSetting');
var UserRemove = require('./components/Pages/User/UserRemove');


ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Feature}/>
                <Route path="setting" component={Setting}/>
                <Route path="user" component={User}>
                    <IndexRoute component={User}/>
                    <Route path="profile" component={UserProfile}/>
                    <Route path="setting" component={UserSetting}/>
                    <Route path="remove" component={UserRemove}/>
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('app')
); //render

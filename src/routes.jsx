var React = require('react');
var ReactRouter = require('react-router'); 
var HashHistory = require('react-router/lib/hashhistory'); 
//Object that tells the router how we'll be keeping track of what page the user is on in any given time
var Router = ReactRouter.Router; 
//Decides what content to be shown on the page in any given time
var Route = ReactRouter.Route; 
//Used to configure the router

var Main = require('./components/main');

module.exports = (
	<Router history={new HashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
)
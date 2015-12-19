var React = require('react');
var ReactFire = require('reactFire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://boiling-inferno-6311.firebaseio.com/';
var fb;

var App = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function () {
		return {
			items: {},
			loaded: false
		}
	},
	componentWillMount: function () {
		fb = new Firebase(rootUrl + 'items/');
		this.bindAsObject(fb, 'items');
		fb.on('value', this.handleDataLoaded);
	},
	render: function() {
		return <div className="row panel panel-default">
			<div className="col-md-8 col-md-offset-2">
				<h2 ClassName="text-center">
					To-Do List
				</h2>
			</div>
			<Header itemsStore={this.firebaseRefs.items} />
			<div className={"content " + (this.state.loaded ? 'loaded' : '')}>
				<List items={this.state.items} />
				{this.handleShowBulkDelete()}
			</div>
		</div>
	},
	handleShowBulkDelete: function () {
		if (this.state.loaded) {
			return <div>
				<button className="btn btn-default" onClick={this.handleBulkDelete}>Delete checked items</button>
			</div>
		}
	},
	handleDataLoaded: function () {
		this.setState({loaded: true});
	},
	handleBulkDelete: function () {
		var items = this.state.items;
		for (key in this.state.items) {
			if (this.state.items[key].done) {
				fb.child(key).remove();
			}
		}
	}
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));

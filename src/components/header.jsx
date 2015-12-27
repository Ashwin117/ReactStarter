var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return <nav className="navbar navbar-default header">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Imgur Browser
				</Link>
				<ul className="nav navbar-nav navbar-right">
					<li><a>Topic #1</a></li>
				</ul>
			</div>
		</nav>
	}
});
import React from 'react';

class App extends React.Component{
	render(){
		return(
			<div className="tony">
			<div className="head">
			   <h2>Tony Robbins</h2>
			</div>
		    <div className="list">
			    <ul className="list-content">
				<li className="matter"> <a href="">Mission</a>
				<ul className="drop">
				<li>Contribution</li>
				<li>About Tony Robbins</li>
				<li>Get Involved</li>
				<li>Ask Tony Anything</li>
				</ul>
				</li>
				<li className="matter"> <a href="">Store</a>
				<ul className="drop">
				<li>All Product</li>
				<li>Training System</li>
				</ul>
				</li>
				<li className="matter"><a href="">Experiences</a>
				<ul className="drop">
				<li >All Experiences</li>
				<li>Unleash The Power Wiyh-in</li>
				<li>Business Mastery</li>
				<li>Date With Destiny</li>
				<li>Leadership Academy</li>
				<li>Life mastery</li>
				<li>Premium</li>
				</ul></li>
				<li className="matter"> <a href="">Coaching</a>
				<ul className="drop">
				<li>Results Coaching</li>
				</ul></li>
				<li className="matter"> <a href="">Resources</a>
				<ul className="drop">
				<li>All Experiences</li>
				<li>Unleash The Power With-in</li>
				<li>Business Mastery</li>
				<li>Date With Destiny</li>
				<li>Leadership Academy</li>
				<li>Life mastery</li>
				<li>Premium</li>
				</ul></li>
				</ul>
			</div>
			</div>
		);
	}
}

export default App;
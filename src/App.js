import React from 'react';

class App extends React.Component{
	render(){
		return(
			<div>
			<div className="header">
			<div className="spaa">
				<span className="Number" >1-844-601-1957</span>
			</div>
			</div>

			<div className="tony">
            <div className="head">
			   <h2>Tony Robbins</h2>
			</div>
		    <div className="list">
			    <ul className="list-content">
				<li className="matter"> <a href="" className="btn">Mission <i class="fa fa-angle-down"></i></a>
				<ul className="drop">
				<li>About Tony Robbins</li>
				<li>Contribution</li>
				<li>Get Involved</li>
				<li>Ask Tony Anything</li>
				</ul>
				</li>
				<li className="matter"> <a href="" className="btn">Store <i class="fa fa-angle-down"></i></a>
				<ul className="drop">
				<li>All Product</li>
				<li>Training System</li>
				</ul>
				</li>
				<li className="matter"><a href="" className="btn">Experiences <i class="fa fa-angle-down"></i></a>
				<ul className="drop">
				<li >All Experiences</li>
				<li>Unleash The Power Within</li>
				<li>Business Mastery</li>
				<li>Date With Destiny</li>
				<li>Leadership Academy</li>
				<li>Life mastery</li>
				<li>Premium</li>
				</ul></li>
				<li className="matter"> <a href="" className="btn">Coaching <i class="fa fa-angle-down"></i></a>
				<ul className="drop">
				<li>Results Coaching</li>
				</ul></li>
				<li className="matter"> <a href="" className="btn">Resources <i class="fa fa-angle-down"></i></a>
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
			<div className="search">
				<i class="fa fa-search"></i>
			</div>
			</div>
			
		    <div className="head-image">
			<div className="image11">
			    <h1>Transform Your Life</h1>
			<div className="intro">
                <p><strong>Decades of experience. Millions of lives changed. Undeniable results.</strong></p>
            </div>
                <p className="idea">
                <a  className="btn-blue" href="https://core.tonyrobbins.com/wheel-of-life-4/">Start here </a>
                </p>
            </div>
            </div>

            <div className="para">
            <p className="paragraph"> Live a healthier, wealthier, more fulfilling, passionate and purposeful life – whether that means achieving in business, reigniting your relationship or discovering who you really are. Tony Robbins’ live events, one-on-one coaching program, training systems and group workshops will help close the gap between where you are and where you want to be. </p>
			</div>
			</div>
		);
	}
}

export default App;
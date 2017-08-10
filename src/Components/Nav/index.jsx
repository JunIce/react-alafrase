import React, {Component} from 'react';

import './css/index.css';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultClass : 'inav',
		}
	}
	componentDidMount () {
     	window.addEventListener('scroll', this.handleScroll.bind(this));
  	}
  	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
  	}
  	handleScroll() {
  		
  		var scrollTop = document.body.scrollTop;
  		
  		scrollTop > 200 ? this.setState({defaultClass : 'inav fixed'}) : this.setState({defaultClass : 'inav'})
  	}
	render() {
		return (
			<nav className={this.state.defaultClass}>
				<ul>
					<li className="i-item"><a href="javascript:;">JAVASCRIPT</a></li>
					<li className="i-item"><a href="javascript:;">PHP</a></li>
					<li className="i-item"><a href="javascript:;">LINUX</a></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;
import React from 'react';

import './css/index.css'

var Header = function () {
		return (
			<nav className="inav">
				<ul>
					<li className="i-item"><a href="javascript:;">JAVASCRIPT</a></li>
					<li className="i-item"><a href="javascript:;">PHP</a></li>
					<li className="i-item"><a href="javascript:;">LINUX</a></li>
				</ul>
			</nav>
		)
};

export default Header;
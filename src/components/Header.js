import React from 'react'
import settings from '../resources/images/settings.webp'
import help from '../resources/images/help.webp'
import back from '../resources/images/back.webp'
import { NavLink } from "react-router-dom";

class Header extends React.Component {

	render(){
	return (
		<header>
			<div className="navigation">
				<NavLink to="/">
					<img src={back} style={{display:this.props.display}} />
				</NavLink>
				<h2>Calculadora de grasa corporal</h2>
			</div>
			<div className="configs">
				<NavLink to="/settings">
					<img className="icon" src={settings} />
				</NavLink>
				<NavLink to="/help">
					<img className="icon" src={help} />
				</NavLink>
			</div>
		</header>
	)
	}
}

export default Header
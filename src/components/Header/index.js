import React from 'react'
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
	render(){
		return <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/aboutUs">About Us</Link></li>
		</ul>
	}
}
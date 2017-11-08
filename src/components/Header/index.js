import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../action/actionCreator'

class Header extends React.Component{
	render(){
			console.log('props',this.props)
		return <nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <NavLink to="/" exact className="navbar-brand">{this.props.GlobalData.webSiteName}</NavLink>
				    </div>
					<ul className="nav navbar-nav">
						<li><NavLink exact to="/"  activeClassName="active">Home</NavLink></li>
						<li><NavLink to="/aboutUs" activeClassName="active">About Us</NavLink></li>
						<li><NavLink to="/aboutUs/wizard" activeClassName="active">wizard</NavLink></li>
					</ul>
				</div>
			</nav>
	}
}

function mapStateToProps(state){
	console.log('map--',state)
	return {GlobalData:state.GlobalData}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
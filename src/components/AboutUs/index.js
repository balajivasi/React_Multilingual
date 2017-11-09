import React from 'react'
import TWizard from '../tWizard'
import { Switch ,Route} from 'react-router-dom'
export default class AboutUs extends React.Component{
	render(){
		console.log('data--',this.props.location.pathname)
		return 	<div>
					<h1>About Page</h1>
					<Switch>
						<Route exact path="/aboutUs/wizard" component={ TWizard } />
					</Switch>
				</div>
	}
}
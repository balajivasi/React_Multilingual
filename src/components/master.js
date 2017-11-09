import React from 'react'
import { Switch ,Route} from 'react-router-dom'

import HomePage from './HomePage'
import AboutUs from './AboutUs'

export default class MasterPage extends React.Component{
	render(){
		return  <Switch>
					<Route exact path="/" component={ HomePage } />
					<Route path="/aboutUs" component={ AboutUs } />
				</Switch>
	}
}
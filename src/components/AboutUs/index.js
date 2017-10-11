import React from 'react'
export default class AboutUs extends React.Component{
	render(){
		console.log('data--',this.props.location.pathname)
		return 	<div>
					<h1>About Page</h1>
				</div>
	}
}
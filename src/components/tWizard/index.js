import React from 'react'
export default class TWizard extends React.Component{
	render(){
		console.log('data--',this.props.location.pathname)
		return 	<div>
					<h1>Twizard Page</h1>
				</div>
	}
}
import React from 'react'
export default class HomePage extends React.Component{
	render(){
		console.log('data--',this.props.location.pathname)
		return <h1>Home Page</h1>
	}
}
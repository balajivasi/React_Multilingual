import React from 'react'
import Header from './Header'
import MasterPage from './master'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../action/actionCreator'

class App extends React.Component{
	render(){
		return  <div className="conainer">
					<Header {...this.props} />
					<MasterPage />
				</div>
	}
}
function mapStateToProps(state){
	console.log('map--',state)
	return {GlobalData:state.GlobalData}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
import React from 'react'
import Header from './Header'
import MasterPage from './master'

class App extends React.Component{
	render(){
		return  <div className="conainer">
					<Header  />
					<MasterPage />
				</div>
	}
}

export default App
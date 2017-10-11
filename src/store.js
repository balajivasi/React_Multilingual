import { createStore } from 'redux'
import rootReducer from './reducers'

import GlobalData from './data/globalData'

const defaultState={
	GlobalData
}

const Store= createStore(rootReducer,defaultState)

export default Store
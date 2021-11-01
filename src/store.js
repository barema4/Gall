import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialastate = {}

const middleWare = [thunk]

const store = createStore(reducer, initialastate, composeWithDevTools(applyMiddleware(...middleWare)))

export default store
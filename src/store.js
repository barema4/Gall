import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducers } from './reducers/productReducers';
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer
})

const initialastate = {}

const middleWare = [thunk]

const store = createStore(reducer, initialastate, composeWithDevTools(applyMiddleware(...middleWare)))

export default store
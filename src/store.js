import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducers } from './reducers/productReducers';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const initialastate = {}

const middleWare = [thunk]

const store = createStore(reducer, initialastate, composeWithDevTools(applyMiddleware(...middleWare)))

export default store
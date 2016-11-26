import { createStore, applyMiddleware } from 'redux'
// import ReduxPromise from 'redux-promise'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk';

//const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
const store = applyMiddleware(thunk)(createStore)(rootReducer)
export default store

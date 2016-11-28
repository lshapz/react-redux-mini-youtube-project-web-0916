import { createStore, applyMiddleware } from 'redux'
// import ReduxPromise from 'redux-promise'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
// const store = applyMiddleware(thunk)(createStore)(rootReducer)
// export default store

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store 
import { createStore, applyMiddleware } from 'redux'
import reducers  from './reducers/index.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
let store = createStore( reducers, composeWithDevTools(applyMiddleware(thunk) ) )
export default store
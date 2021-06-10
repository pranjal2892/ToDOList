import { combineReducers, createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './Redux/Bugs/reducer'
import cakeReducer from './Redux/Cakes/reducer'
import userReducer from './Redux/Users/reducer'

const loggerMiddleware = createLogger();

const rootReducer =  combineReducers({
  BugReducer : reducer,
  CakeReducer : cakeReducer,
  user : userReducer
})
const store =  createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunk)
)

export default store;

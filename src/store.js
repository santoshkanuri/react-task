import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';
export default function configureStore() {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
      combineReducers({userReducer:Reducer}),
      composeEnhancers(applyMiddleware(thunk))
    );
    return store;
  }
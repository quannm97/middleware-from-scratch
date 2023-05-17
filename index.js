import { createStore, applyMiddleware} from "redux"; //without redux-tool
import reducer from "./store/reducer";
import logger from "./logger";

const store = createStore(reducer, applyMiddleware(logger)) //cam pass 1 or more middleware
/**
 * run dispatch and send data to add user in index.js
 */

store.dispatch(userAdded({name:"User 1"}));

/**
 * Open img to see the result
 * 'store' value is not the 'store' in redux because 'store' in redux has more method, like 'subscribe', this store will always need dispatch and getState
 * this is just an object look like 'store'
 * 'next' is a reference to the next function in pipeline, but in this example we only have single middleware function so it is the reducer
 * 'action' is the action we dispatch
 */
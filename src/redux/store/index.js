import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunk from "redux-thunk"

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, middleware);

// store.dispatch(toggleStatus('acceleration_x', true))

export default store;
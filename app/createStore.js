import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {
  createNavigationEnabledStore,
  NavigationReducer
} from "@expo/ex-navigation";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: "navigation"
});

const store = createStoreWithNavigation(rootReducer);

export default store;

import * as Expo from "expo";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./createStore";

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";

import Router from "./Router";

const navigationContext = new NavigationContext({
  router: Router,
  store: store
});

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("login")} />
        </NavigationProvider>
      </Provider>
    );
  }
}

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import RouterConfig from "./router/RouterConfig";

import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <RouterConfig></RouterConfig>
        </Provider>
      </React.Fragment>
    );
  }
}
export default App;

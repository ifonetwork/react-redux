import React from "react";
import "./styles.css";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import Child from "./Child";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Child test="123">
            <div>1</div>
            <div>2</div>
          </Child>
        </div>
      </Provider>
    </div>
  );
}

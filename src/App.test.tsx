import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("rendering App", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows APP', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

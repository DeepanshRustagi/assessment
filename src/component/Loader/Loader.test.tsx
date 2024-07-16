import React from "react";
import { render } from "@testing-library/react";

import Loader from ".";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("rendering Loader", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("Shows Loader", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );
  });

  it("Shows Loader isLoading true", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Loader isLoading={true} />
      </Provider>
    );
  });
});

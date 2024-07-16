import React from "react";
import { render } from "@testing-library/react";

import Header from ".";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";


describe("rendering Header", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows Header', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
});



import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./index";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("rendering Dashboard", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("Shows Dashboard", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  });

});

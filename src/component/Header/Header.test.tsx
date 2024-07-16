import React from "react";
import { render } from "@testing-library/react";

import Header from ".";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("rendering Header", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("Shows Header First Page", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Header
          day={0}
          onChange={function (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ): void {
            throw new Error("Function not implemented.");
          }}
          title={"Most Popular Articles"}
          showDays={true}
        />
      </Provider>
    );
  });

  it("Shows Header Second Page", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Header
          day={1}
          onChange={function (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ): void {
            throw new Error("Function not implemented.");
          }}
          title={"Detail"}
          showDays={false}
        />
      </Provider>
    );
  });
});

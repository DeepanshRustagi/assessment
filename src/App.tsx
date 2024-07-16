import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Provider } from "react-redux";
import { getStore } from "./store";
import {AppRouter} from './router/AppRouter';

export const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;

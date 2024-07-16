import { createSelector } from "@reduxjs/toolkit";

const loadingState = (state: any) => state?.appState?.loading;
const articals = (state: any) =>
  state?.appState?.articals;


export const appSelector = {
  getLoading: () => {
    return loadingState;
  },
  getArticals: () => {
    return articals;
  }
};

import { createSlice, createAction } from "@reduxjs/toolkit";
import { GET_MOST_POPULAR_ARTICAL } from "../../common/contants";

export const appState = {
  articals: [],
  artcialInfo: {},
  loading: false,
};

export const getArticalCreator = createAction<any>(GET_MOST_POPULAR_ARTICAL);
export const getArticalTypeName = getArticalCreator(null).type;

export const appSlice = createSlice({
  name: "app/appSlice",
  initialState: appState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setArticals: (state, action) => {
      return {
        ...state,
        articals: action.payload,
      };
    },
  },
});

export const appSliceReducer = appSlice.reducer;
export const appSliceActions = appSlice.actions;

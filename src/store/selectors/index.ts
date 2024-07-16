const loadingState = (state: any) => state?.appState?.loading;
const articals = (state: any) =>
  state?.appState?.articals;
const articleInfo = (state: any) =>
  state?.appState?.articleInfo;


export const appSelector = {
  getLoading: () => {
    return loadingState;
  },
  getArticals: () => {
    return articals;
  },
  getArticleInfo: () =>{
    return articleInfo;
  }
};

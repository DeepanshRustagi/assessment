import { appSliceActions, getArticalTypeName } from "../reducers/appSlice";
import { call, takeEvery, put } from "@redux-saga/core/effects";
import { NetworkService } from "../../services";
import { ResponseGenerator } from "../../common/helper";
import { HTTP_OK } from "../../common/contants";
import env from "../../env.json";


export function* getArticalWatcher() {
  yield takeEvery(getArticalTypeName, getArticalWorker);
}

export function* getArticalWorker(action: any) {
  try {
    yield put(appSliceActions.setLoading(true));
    const response: ResponseGenerator = yield call(
      NetworkService.get,
      NetworkService.API.MOST_POPULAR_ARTICAL.replace(":day", action?.payload) +
        env.API_KEY,
      null,
      null
    );
    yield put(appSliceActions.setLoading(false));
    if (response?.status === HTTP_OK) {
      yield put(appSliceActions.setArticals(response?.data?.results));
    } else {
    }
  } catch (error) {
    yield put(appSliceActions.setLoading(false));
  }
}

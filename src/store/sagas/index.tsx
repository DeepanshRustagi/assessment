import { all, call, spawn } from "redux-saga/effects";

import {
  getArticalWatcher
} from "./appSaga";

export function* rootSaga() {
  /**
   *
   *  Register watchers
   *
   */
  const sagas: any = [getArticalWatcher];

  /**
   * keep everything (e.g., child tasks) alive
   *
   **/
  yield all(
    sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {}
        }
      })
    )
  );
}

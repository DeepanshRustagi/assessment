import {combineReducers} from 'redux';
import {appSliceReducer} from './appSlice';


export const rootReducer = combineReducers({
  appState: appSliceReducer,
});

export {getArticalCreator} from './appSlice';

import {combineReducers} from 'redux';
import subReducer from './subReducer';

const reducers = combineReducers({
  sub: subReducer,
});

export default reducers;

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '@storage/reducers';
import { rootSagaWatcher } from '@storage/sideEffects';

const saga = createSagaMiddleware();
const store: any = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSagaWatcher);

export default store;


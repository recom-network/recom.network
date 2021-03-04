import { combineReducers } from 'redux';

import { userReducer } from '@storage/reducers/user';
import { coinAccordionReducer } from '@storage/reducers/coinAccordion';

export const rootReducer = combineReducers<any>({
    user: userReducer,
    coinAccordion: coinAccordionReducer
});

export type RootState = ReturnType<typeof rootReducer>
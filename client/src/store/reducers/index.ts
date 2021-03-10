import { combineReducers } from 'redux';

import { userReducer } from '@storage/reducers/user';
import { coinAccordionReducer } from '@storage/reducers/coinAccordion';
import { modalsReducer } from '@storage/reducers/modals';

export const rootReducer = combineReducers<any>({
    user: userReducer,
    coinAccordion: coinAccordionReducer,
    modals: modalsReducer
});

export type RootState = ReturnType<typeof rootReducer>
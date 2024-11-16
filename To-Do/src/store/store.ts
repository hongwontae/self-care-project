import {configureStore} from '@reduxjs/toolkit';
import ToggleSlice from './ToggleSlice';

export const store = configureStore({
    reducer : {
        isDate : ToggleSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
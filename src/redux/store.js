import { configureStore } from '@reduxjs/toolkit';
import eventInfoReducer from './eventInfo';

export const store = configureStore({
    reducer: {
        eventInfo: eventInfoReducer
    }
})
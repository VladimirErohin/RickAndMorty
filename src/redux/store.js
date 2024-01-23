import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from "./charactersSlice";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
    reducer: {
        characters:charactersReducer,
        pagination:paginationReducer,
    },
});

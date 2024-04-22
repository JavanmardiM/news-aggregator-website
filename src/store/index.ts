import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articles";
import filterSlice from "./filters";

const rootReducer = combineReducers({
    article: articleSlice.reducer,
    filter: filterSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};

export type IRootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

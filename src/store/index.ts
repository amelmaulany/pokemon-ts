import { Action, combineReducers } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { ThunkAction, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./saga";

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

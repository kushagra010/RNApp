import {
  configureStore,
  Reducer,
  ActionFromReducersMapObject,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import { baseApi } from './api/baseApi';

export const root = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducers = {
  [baseApi.reducerPath]: baseApi.reducer,
};

type ReducersMapObject = typeof reducers;

export const rootReducer: Reducer<
  StateFromReducersMapObject<ReducersMapObject>,
  ActionFromReducersMapObject<ReducersMapObject>
> = combineReducers(reducers);

const persistedReducer = persistReducer(root, rootReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

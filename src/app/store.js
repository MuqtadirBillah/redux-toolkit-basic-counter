import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import counterReducer from '../features/counter/counterSlice'
import apiReducer from '../features/apiCalls/apiSlice'
import logger from 'redux-logger'
import { apiSlice } from '../features/apiCalls/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger)
})
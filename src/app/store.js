import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import counterReducer from '../features/counter/counterSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
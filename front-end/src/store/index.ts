import { configureStore } from '@reduxjs/toolkit'
import { tmdbAPI } from '../api/tmdb-api'

export const store = configureStore({
  reducer: {
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

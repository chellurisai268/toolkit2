import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import { productsApi } from '../services/products'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/countries'
import { todosApi } from '../services/todos'
export const store = configureStore({
  reducer: {
    productReducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [countriesApi.reducerPath]:countriesApi.reducer,
    [todosApi.reducerPath]:todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      countriesApi.middleware,
      todosApi.middleware
    ),
})

setupListeners(store.dispatch)
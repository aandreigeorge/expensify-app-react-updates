import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authenticationReducer from '../reducers/auth';
import { configureStore } from '@reduxjs/toolkit'


export default () => {

    const store = configureStore({
        reducer: {
          expenses: expenseReducer,
          filters: filterReducer,
          authentication: authenticationReducer
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          })
      });
    return store;
  };


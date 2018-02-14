
import {createStore,combineReducers} from 'redux';
import expensesReducer from './Reducers/expenseReducer';
import filtersReducer from './Reducers/filterReducer'; 



//creating a store with miltiple reducers handler
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};


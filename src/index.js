import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configStore from './configStore';
import {addExpense} from './Actions/expenses';
import expenseVisible from './Selectors/expenseSelector';
import registerServiceWorker from './registerServiceWorker';

const store=configStore();

store.dispatch(addExpense({ description: 'Water bill' ,amount:100,createdAt:1000}));
store.dispatch(addExpense({ description: 'Gas bill',amount:200,createdAt:200 }));

const state = store.getState();
 expenseVisible(state.expenses, state.filters);


const jsx=(
    <Provider store={store}>
       <App/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root')
);
registerServiceWorker();

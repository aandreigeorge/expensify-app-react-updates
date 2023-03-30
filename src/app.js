import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses, clearExpensesAfterLogout } from './actions/expenses';
import { login, logout } from './actions/auth';
import { Provider } from 'react-redux';
import { googleAuth } from './firebase/firebase';


const root = ReactDOM.createRoot(document.getElementById('app'));
const store = configureStore();
let hasRendered = false;

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);
const renderApp = () => {
    if(!hasRendered) {
        root.render(jsx);
        hasRendered = true;
    }
};

googleAuth.onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses());
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        store.dispatch(clearExpensesAfterLogout());
        renderApp();
        history.push('/');  
    }
});
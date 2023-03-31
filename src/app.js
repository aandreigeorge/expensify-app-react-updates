import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import { Provider } from 'react-redux';
import { startSetExpenses, clearExpensesAfterLogout } from './actions/expenses';
import { firebaseAuth } from './firebase/firebase';
import { login, logout } from './actions/auth';


const root = ReactDOM.createRoot(document.getElementById('app'));
const store = configureStore();
let hasRendered = false;

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

root.render(<LoadingPage />);

const renderApp = () => {
    if(!hasRendered) {
        root.render(jsx);
        hasRendered = true;
    }
};

firebaseAuth.onAuthStateChanged((user) => {
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
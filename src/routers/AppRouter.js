import React from 'react';
import PrivateRoute from './PrivateRoute'
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import EmailSingupPage from '../components/EmailSingupPage';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import UserProfile from '../components/UserProfile';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'


export const history = createBrowserHistory();

const AppRouter = () => (
    <HistoryRouter history={history}>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/signup' element={<EmailSingupPage/>} />
            <Route path='/dashboard' element={<PrivateRoute> <ExpenseDashBoardPage /> </PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute> <UserProfile /> </PrivateRoute>} />
            <Route path='/create' element={<PrivateRoute> <AddExpensePage /> </PrivateRoute>} />
            <Route path='/edit/:id' element={<PrivateRoute> <EditExpensePage /> </PrivateRoute>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </HistoryRouter>
);

export default AppRouter;


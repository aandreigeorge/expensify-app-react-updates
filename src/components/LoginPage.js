import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';
import { Link } from 'react-router-dom';


const LogInPage = (props) => {
    return (
        <div className='box-layout'>
            <div className='box-layout__box'>
                <h1 className='box-layout__title'>Expense Tracker</h1>
                <p>Time to take control of your expenses.</p>
                <button className='button' onClick={props.dispatch(startGoogleLogin)}>Login with Google</button>
                <p>Don't have an account? <Link to="/signup" className="input--grey-focus">Sign up!</Link></p>
            </div>
        </div>
    );

}

export default connect()(LogInPage);


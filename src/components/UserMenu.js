import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';


const UserMenu = (props) => (
        <div className='dropdown'>
                <p className='dropdown__button'>{props.userName ? `Hello, ${props.userName}` : 'User Profile'}</p>
                <div className='dropdown__content'>
                    <Link className='dropdown__element' to='/profile'>My Profile</Link>
                    <button className='dropdown__element' onClick={props.dispatch(startLogout)}>Logout</button>
                </div>
        </div> 
    ); 


const mapStateToProps = (state) => ({
    userName: state.authentication.displayName
});


export default connect(mapStateToProps)(UserMenu);
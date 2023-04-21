import React from 'react';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';


const Header = (props) => (
        <header className='header'>
            <div className='content-container'>
                <div className='header__content'>
                    <Link className='header__title' to='/dashboard'>
                        <h1>Expensify</h1>
                    </Link>
                    <UserMenu />
                </div>        
            </div>
        </header>
);

export default Header;



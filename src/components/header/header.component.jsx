import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as  Logo } from '../../assets/4.3 crown.svg'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOPS
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT {console.log('clicked')}
                    </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);

export default Header;
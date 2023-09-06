import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.js'
import LoginNavigation from '../LoginNavigation/LoginNavigation.js'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = ({ loggedIn }) => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation()
  return (
    <header className='header'>
      <Link to='/' className='header__link link'>
        {<img className='header__logo' src={logo} alt='Логотип' />}
      </Link>
      {!loggedIn && <LoginNavigation/>  
      //   <nav className='headernav-login'>
      //   <div className='headernav__login-links'>
      //     <Link to='/signup' className='headernav__login-link headernav__login-link_signup'>Регистрация</Link>
  
      //     <Link to='/signin' className='headernav__link headernav__link_signin'>{' '}
      //       <button className='headernav__button button' type='button'>Войти</button>
      //     </Link>
      //   </div>
      // </nav>
      }
      {loggedIn && <Navigation/>
        // <nav className='headernav'>
        //   <div className='headernav__links'>
        //     <Link to='/movies' className='headernav__link headernav__link_movies'>Фильмы</Link>
        //     <Link to='/saved-movies' className='headernav__link headernav__link_saved-movies'>Сохранённые фильмы</Link>
        //   </div>
        // </nav>
      }
      {/* <Link to='/profile' className='headernav__link headernav__link_profile' activeclassname='headernav__link_active'>Аккаунт</Link> */}
    </header>
  )
}

export default Header

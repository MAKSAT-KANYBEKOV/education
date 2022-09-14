import React from 'react'
import './Header.style.css'
import logoImage from '../../../assests/image/logo.svg'
import loginImage from './header-img/button-img.svg'
import whitelogoImage from './header-img/whitelogo.svg'
import { menu } from './menu.db'
import geo from './header-img/geo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-content">
          <div className="header-adaptiv">
            <img src={whitelogoImage} alt="" className='logo-adaptiv' />
            <div className="adaptiv-burger">
              <span className="adaptiv-burger__item"></span>
              <span className="adaptiv-burger__item"></span>
              <span className="adaptiv-burger__item"></span>
            </div>
          </div>
          <img src={logoImage} alt="" className="logo" />
          <ul className="header-nav">
            {menu.map((item, index) => (
              <li key={`menu item ${index}`}>
                <img src={item.img} alt="" className="1" />
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="header__select">
            <img className="header-select__img" src={geo} alt="" />
            <select name="town" className="header-select">
              <option value="1" className="header__options">
                Дзержинск
              </option>
              <option value="2" className="header__options">
                Нижний Новгород
              </option>
              <option value="3" className="header__options">
                On-line
              </option>
            </select>
          </div>

          <div className="header-button">
            <img src={loginImage} alt="" className="button-img" />
            <a href="/" className="button-login">
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

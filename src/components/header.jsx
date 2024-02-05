import HeaderPhone from '../img/svg/phone.svg'
import Logo from "../img/svg/logo.svg?react";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className='header__content'>
          <div className='logo'>
            <Logo className='logo__img' />
          </div>
          <div className="header__phone">
            <img src={HeaderPhone} alt="phone" className="header__phone_img" />
            <a href="tel:+380991019368" className="header__tel">+38 (099) 101 93 68</a>
          </div>
        </div>
      </div>
    </header>
  )
}
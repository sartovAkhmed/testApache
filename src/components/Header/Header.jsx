
import React from 'react'; 
import './header.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <h4 className='header__logo'>Apache</h4>
                    <nav className='header__nav'>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Статьи</a></li>
                            <li><a href="#">Примеры</a></li>
                            <li><a href="#">Блог</a></li>
                        </ul>
                    </nav>
                    <div className="header__block">
                        <button>Sign Up</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
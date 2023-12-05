import React from 'react';
import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div style={{display: 'flex', alignItems: 'center'}} className="footer__block">
                        <span style={{color: 'red', fontSize: '24px'}}>*</span>
                        <h4 style={{fontSize: '30px'}}>Apache</h4>
                        <span style={{color: 'red', fontSize: '24px'}}>*</span>
                    </div>
                    <p style={{width: '250px'}}>Документация и примеры для мощного и отзывчивого навигационного заголовка Bootstrap и навигационной панели. Включает поддержку брендинга, навигации и прочего, включая поддержку нашего плагина для сворачивания.</p>
                    <nav className='footer__nav'>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Статьи</a></li>
                            <li><a href="#">Примеры</a></li>
                            <li><a href="#">Блог</a></li>
                        </ul>
                    </nav>
                    <nav className='footer__nav'>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Статьи</a></li>
                            <li><a href="#">Примеры</a></li>
                            <li><a href="#">Блог</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
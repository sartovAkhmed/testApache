import React, { useState } from 'react';
import './slider.css'

const SimpleSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % slides.length;
        setCurrentIndex(index);
    };

    return (
        <section className="slider__wrapper">
            <div className="container">
                <div className="slider-container">
                    <button onClick={goToPrevSlide}>Previous</button>
                    <div className="slide">
                        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
                    </div>
                    <button onClick={goToNextSlide}>Next</button>
                </div>
            </div>
        </section>
    );
};

export default SimpleSlider;

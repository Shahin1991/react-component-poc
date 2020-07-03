import React, { useState, useEffect } from 'react'
import sliderStyles from './Slider.module.css'

import PropTypes from 'prop-types'

function Slider({ slides, slideOptions: { autoslide, autoslideInterval, rtl } }) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)


    useEffect(() => {
        // console.log("Use effect called")
        if (autoslide) {
            const timer = setInterval(() => {
                setActiveSlideIndex(prevActiveSlideIndex => ((prevActiveSlideIndex + 1) % slides.length))
            }, autoslideInterval);
            return () => clearInterval(timer);
        }
    }, [autoslide]);

    return (
        <div>
            <div className={rtl ? (`${sliderStyles.slider} ${sliderStyles.rtl}`) : (`${sliderStyles.slider} ${sliderStyles.ltr}`)}>
                {slides.map((slide, index) => (
                    <div key={index} className={index === activeSlideIndex ? (`${sliderStyles.slide} ${sliderStyles.current}`) : (`${sliderStyles.slide}`)} style={{ background: `url(${slide.backgroundImageUrl}) center no-repeat`, backgroundSize:`cover`}}>
                        <div className={rtl ?(`${sliderStyles.content} ${sliderStyles.rtl}`):(`${sliderStyles.content} ${sliderStyles.ltr}`)}>
                            <h1>{slide.heading}</h1>
                            <p>{slide.body}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div className={sliderStyles.buttons}>
                <button id={sliderStyles.prev}
                    onClick={rtl ? (() => setActiveSlideIndex(prevActiveSlideIndex => ((prevActiveSlideIndex + 1) % slides.length)))
                        : (() => setActiveSlideIndex(prevActiveSlideIndex => ((slides.length + prevActiveSlideIndex - 1) % slides.length)))} >
                    <i className={`${sliderStyles.arrow} ${sliderStyles.left}`}></i>
                </button>
                <button id={sliderStyles.next}
                    onClick={rtl ? (() => setActiveSlideIndex(prevActiveSlideIndex => ((slides.length + prevActiveSlideIndex - 1) % slides.length))) :
                        (() => setActiveSlideIndex(prevActiveSlideIndex => ((prevActiveSlideIndex + 1) % slides.length)))}>
                    <i className={`${sliderStyles.arrow} ${sliderStyles.right}`}></i>

                </button>
            </div>
        </div>
    )
}


Slider.propTypes = {
    slides: PropTypes.array.isRequired
}


export default Slider
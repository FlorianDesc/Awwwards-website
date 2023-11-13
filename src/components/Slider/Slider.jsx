import { Link } from 'react-router-dom'
import "./Slider.css"
import { useState, useRef, useEffect } from 'react'

function Slider() {

    const [slide, setSlide] = useState(1)

    const slider = useRef()

    useEffect(() => {
        if(slide === 1)
            slider.current.style.transform = 'translateX(0%)'
        else{
            slider.current.style.transform = 'translateX(-100%)'
        }
    }, [slide])

    return (
        <div className="carousel-container">
            <div ref={slider} className="carousel-slide">
                <div className="slider1">
                    <div className="info-slider">
                        <p>Hola Paloma!</p>
                        <p>Introducing our latest limited edition cocktail. An irresistible summer favourite,<br></br> made with El Rayo tequila.</p>
                        <button className='btn-info-slider'>Say Hola</button>
                    </div>
                </div>
                <div className="slider2">
                    <div className="info-slider">
                        <p>Party prep, sorted</p>
                        <p>Parties have never been easier. Leave the mixing to us – just shake, serve and<br></br> savour bar-quality cocktails.</p>
                        <button className='btn-info-slider'>Shop now</button>
                    </div>
                </div>
            </div>
            <div onClick={() => {setSlide(1)}} className='btn-slider-before'>
                <div className='before-btn'></div>
            </div>
            <div onClick={() => {setSlide(2)}} className='btn-slider-after'>
                <div className='after-btn'></div>
            </div>
        </div>        
    )
}

export default Slider
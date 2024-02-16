import { useState } from "react";
import './TarjetaDigimon.css';

const Tarjeta = ({ items }) => {


    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNextSlide = () => {

        if (items.length > currentSlide + 1) {
            setCurrentSlide(currentSlide + 1)
        } else {
            setCurrentSlide(0)
        }

    }

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(items.length - 1)
        }

    }

    return (
        <>

            {
                items.map((item) => {
                    return (
                        <div className="Slider">
                            <button className="Slider-button" onClick={handlePrevSlide}>Prev</button>
                            <img className="Slider-image" src={item[currentSlide]} alt={items[1]} />
                            <button className="Slider-button" onClick={handleNextSlide}>Next</button>
                        </div>
                    )
                })
            }







        </>

    )
}



export default Tarjeta;
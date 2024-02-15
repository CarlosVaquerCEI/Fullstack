import { useState } from "react";

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
            <button onClick={handlePrevSlide}>Ant</button>
            <img src={items[currentSlide]} alt={items[currentSlide]} />
            {items[currentSlide]}
            <button onClick={handleNextSlide}>Sig</button>

        </>

    )
}

export default Tarjeta;
import { useState } from "react";


const Slider = ({items}) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNextSlide = () => {

        if(items.length > currentSlide +1) {
            setCurrentSlide(currentSlide+1)
        } else {
            setCurrentSlide(0)
        }

    }

    const handlePrevSlide = () => { 
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide-1)
        } else {
            setCurrentSlide(items.length-1)
        }
        
    }

    return (
        <>
        <button onClick={handlePrevSlide}>Ant</button>
        <h1>Slider</h1>
        <img src={items[currentSlide]} alt={items[currentSlide]} />
        {items[currentSlide]}
        <button onClick={handleNextSlide}>Sig</button>
        
        </>

    )
}

export default Slider;
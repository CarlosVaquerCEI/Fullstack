import { useState } from "react";

const LightBox = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleLightBox = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section>
            <button onClick={toggleLightBox}>Abrir Lightbox</button>
            {isOpen && 
            <div>
                <div className="Lightbox-backdrop">
                    <button onClick={toggleLightBox}>X</button>
                    <h3>Contenido del Lightbox</h3>
                </div>
                
            </div>}
        </section>
    )
}

export default LightBox;
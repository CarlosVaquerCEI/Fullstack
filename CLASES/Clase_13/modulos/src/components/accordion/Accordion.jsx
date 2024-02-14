import { useState } from "react";

const Accordion = ({items}) => {

    const [activeItem, setActiveItem] = useState(null)

    const toggleAccordion = (itemId) => {
        setActiveItem(itemId)
    }

    return(
        <section className="Accordion">
            {items.map((item) => (
                <div className="Accordion-div" key={item.id}>
                    <button onClick={() => toggleAccordion(item.id)} className="Accordion-btn">
                            {item.titulo}
                    </button>
                    { activeItem === item.id && <div>{item.contenido}</div>}
                </div>
            ))}
        </section>
    )
}

export default Accordion;
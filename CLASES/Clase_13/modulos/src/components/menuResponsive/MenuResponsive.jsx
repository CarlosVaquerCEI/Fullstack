import { useState } from "react"
import "./MenuResponsive.css"

const MenuResponsive = () => {

    const [isOpen, setIsOpen] = useState(false)

    const itemsMenu = [
        {
            titulo: "home",
            href: "#"
        }, 
        {
            titulo: "productos",
            href: "#"
        }, 
        {
            titulo: "cotactos",
            href: "#"
        }, 
    ]

    const toggleMenu = () => {
        // para que vaya cambiando de true a false, por eso en la función que actualiza le añadimos una negación (!) delante de la variable
        setIsOpen(!isOpen)
    }

    return (
        <header className="Header">
            <h1>Logo</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible" : ""}`}>
                <ul className="Header-ul">
                    {itemsMenu.map ((item, index) => (
                        <Li key={index} {...item} />
                    ))}
                </ul>
            </nav>
            
            
            {/* Botón Responsive de Menú */}
            <button onClick={toggleMenu} className="Header-btn">
                BtnIcon
            </button>
        </header>
    )
}

const Li = ({titulo}) => {
    return (
        <li className="Header-li">{titulo}</li>
    )
}

export default MenuResponsive;
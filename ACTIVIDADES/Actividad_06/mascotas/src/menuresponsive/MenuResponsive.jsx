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

    const itemsHeader = {
        src: "https://media0.giphy.com/media/RbtBNBKA6JjW3Fi12g/giphy.gif?cid=82a1493b6ckmrzr8p6b5g2k821jyz86gq1lwfxi1ly0j2rbr&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        nombre: "Digimon Perdidos",
        info: "Estos son los Digimons que han sido perdidos por el usuario"
    }

    const toggleMenu = () => {
        // para que vaya cambiando de true a false, por eso en la función que actualiza le añadimos una negación (!) delante de la variable
        setIsOpen(!isOpen)
    }

    return (
        <header className="Header">
            <img className="Header-image" src={itemsHeader.src} alt={itemsHeader.nombre} />
            <nav className={`Header-nav ${isOpen ? "isVisible" : ""}`}>
                <ul className="Header-ul">
                    {itemsMenu.map((item, index) => (
                        <Li key={index} {...item} />
                    ))}
                </ul>
            </nav>


            {/* Botón Responsive de Menú */}
            <img onClick={toggleMenu} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" className="Header-image-menu" />

        </header>
    )
}

const Li = ({ titulo }) => {
    return (
        <li className="Header-li">{titulo}</li>
    )
}

export default MenuResponsive;
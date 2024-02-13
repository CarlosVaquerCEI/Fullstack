import {pixar} from "../../deb/deb"

// Deconstruimos de pixar para no ir escribiendo cosas como {pixar.header.h1.href}
const {header} = pixar
const {h1, nav} = header

const Header = () => {
    return (
        <>
        <header className="Header">
            <Logo/>
            <Nav/>
        </header>

        </>
    )
}

const Logo = () => {
    const {href, src, title} = h1
    return (
            <h1 className="Header-h1">
                <a className="Header-a" href={href}>
                    <img className="Header-img" src={src} alt={title} />
                </a>
            </h1>
    )
}

const Nav = () => {
    return (
        <nav className="Header-nav">
                <ul className="Header-ul">
                    {
                        nav.map((item) => {
                           return <Li key={item.id} {...item} />
                    
                        })
                    }
                </ul>
            </nav>
    )
}

const Li = (props) => {
    const {text, href} = props
    return (
            <li className="Header-li">
                    <a href={href} className="Header-a">{text}</a>
            </li>
    )
}

export default Header;
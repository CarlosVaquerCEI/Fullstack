import { pixar } from "../../deb/deb"
import "./Footer.css"

const { footer } = pixar
const { rrss, nav, button } = footer

const Footer = () => {
    const {href, text} = button

    return (
        <>
            <footer className="Footer">
                <FooterRrss />
                <FooterNav />
                <button>{text}</button>

            </footer>

        </>
    )
}

const FooterRrss = () => {
    return (
        <ul className="Footer-ul-rrss">
            {
                rrss.map((item) => {
                    return <LiRrss key={item.id} {...item} />

                })
            }
        </ul>
    )
}

const LiRrss = (props) => {
    const { src, href } = props
    return (
        <li className="Footer-li-rrss">
            <a href={href} className="Footer-a">
                <img src={src} />
            </a>
        </li>
    )
}

const FooterNav = () => {
    <nav className="Footer-nav">
        <ul className="Footer-ul-nav">
            {
                nav.map((item) => {
                    return <LiNav key={item.id} {...item} />

                })
            }
        </ul>
    </nav>
}

const LiNav = (props) => {
    const { text, href } = props
    return (
        <li className="Footer-li-nav">
            <a href={href} className="Footer-a">{text}</a>
        </li>
    )

}


export default Footer;
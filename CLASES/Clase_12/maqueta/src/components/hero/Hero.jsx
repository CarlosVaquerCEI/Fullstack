import { pixar } from "../../deb/deb"

import "./Hero.css"


const { hero } = pixar



const Hero = () => {
    const { href, src, text, backgroundsrc, backgroundtext } = hero
    return (
        <>
            <section className="HeroImage">
                <div className="HeroImage-contenedor">
                    <a className="HeroImage-a" href={href}>
                        <img src={src} alt={text} className="HeroImage-imagen" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero;
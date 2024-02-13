import {pixar} from "../../deb/deb"


const {hero} = pixar



const Hero = () => {
    const {href, src, text, backgroundsrc, backgroundtext} = hero
    return(
        <>
            <section className="HeroImage">
                <a className="HeroImage-a" href={href}>
                    <img src={src} alt={text} className="HeroImage-imagen" />
                    <img src={backgroundsrc} alt={backgroundtext} className="HeroImage-background" />
                </a>
            </section>
        </>
    )
}

export default Hero;
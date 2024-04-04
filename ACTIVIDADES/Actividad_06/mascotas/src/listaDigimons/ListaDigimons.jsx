import { useState } from 'react'
import './listaDigimons.css'
import MenuResponsive from '../menuresponsive/MenuResponsive'
import '../menuresponsive/MenuResponsive.css'

const ListaDigimons = ({ digimons, categoria }) => {


    return (<>

        <MenuResponsive />

        <div className="ListaDigimons">
            <h2 className="ListaDigimons-h2">{categoria}</h2>
            <div>
                {
                    digimons.map((a) => {
                        return (<>

                            <Digimon key={a.id} {...a} />
                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

const Digimon = (props) => {


    const [isOpen, setOpen] = useState(false)
    const { nombre, raza, descripcion, images } = props

    const ToggleActive = () => {
        setOpen(!isOpen);

    }



    return (<>
        <div className={`Digimon ${isOpen ? "u-blur" : ""}`} onClick={ToggleActive}>
            <img className='Digimon-img' src={images[0]} alt={nombre} />
            <div className='Digimon-div'>

                <h2 className='Digimon-h2'>{nombre}</h2>
                <h4 className='Digimon-h4'>{raza}</h4>
                <p className='Digimon-p'>{descripcion}</p>
            </div>

        </div>

        {

            isOpen && <DigimonInfo ToggleActive={ToggleActive} info={props} />


        }
    </>)
}

const DigimonInfo = ({ ToggleActive, info }) => {


    const { nombre, raza, descripcion, images, detalles } = info

    return (<>
        <div className='DigimonInfo'>
            <button className='DigimonInfo-close' onClick={ToggleActive}>X</button>
            <div className='DigimonInfo-div'>
                <div>
                    <h1 className='DigimonInfo-h1'>{nombre}</h1>
                    <SliderDigimon imagenes={images} />
                </div>

                <AccordeonDigimon detalles={detalles} />
            </div>


        </div>
    </>)
}

const SliderDigimon = ({ imagenes }) => {

    const [imagenActual, setImagenActual] = useState(2)

    const nextImage = () => {

        const next = imagenes.length > imagenActual + 1 ? imagenActual + 1 : 0

        setImagenActual(next)
    }
    const previoustImage = () => {

        const next = imagenActual > 0 ? imagenActual - 1 : imagenes.length - 1

        setImagenActual(next)
    }

    return (<>

        <div>
            <div>
                <img onClick={nextImage} className='DigimonInfo-img' src={imagenes[imagenActual]} alt="" />
                <div className='DigimonInfo-flechas'>
                    <i onClick={previoustImage}>Prev</i>
                    <i onClick={nextImage}>Next</i>

                </div>
            </div>


        </div>
    </>)

}

const AccordeonDigimon = ({ detalles }) => {

    const [activeItem, setActiveItem] = useState(1)


    const handleActiveAccordion = (AccordionId) => {
        setActiveItem(AccordionId)
    }

    return (<>
        <div className='Accordeon'>
            {
                detalles.map(d => {
                    return (<>
                        <div>
                            <h3 className='AccordeonDigimon-h3' onClick={() => handleActiveAccordion(d.id)}>{d.titulo}</h3>
                            <ul>
                                {
                                    activeItem == d.id &&
                                    d.contenido.map(d => {
                                        return (<>
                                            <li>{d}</li>
                                        </>)
                                    })}
                            </ul>

                        </div>

                    </>)
                })
            }</div>

    </>)

}

export default ListaDigimons
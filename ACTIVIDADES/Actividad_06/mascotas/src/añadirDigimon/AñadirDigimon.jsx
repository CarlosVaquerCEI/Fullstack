import './AñadirDigimon.css'

const AñadirDigimon = ({toggleNewDigimon}) => {

 
    return (<>
        <div className="AñadirDigimon">
            <h1>¿Qué encontraste?</h1>
            <div className='AñadirDigimon-div'>
                <button className='AñadirDigimon-button'>Bestia</button>
                <button className='AñadirDigimon-button'>Dragón</button>
                <button className='AñadirDigimon-button'>Otro</button>
            </div>
            <button className='AñadirDigimon-cerrar' onClick={toggleNewDigimon}>X</button>

        </div>
    </>)
}

export default AñadirDigimon
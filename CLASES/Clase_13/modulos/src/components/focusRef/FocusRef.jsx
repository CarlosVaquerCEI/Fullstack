import {useRef} from 'react'


const FocusRef = () => {

    const nameRef = useRef()

const focus = () => {
    nameRef.current.focus()
}

const blur = () => {
    nameRef.current.blur()
}

const scrollToBottom = () => {
    nameRef.current.scrollIntoView({behavior: "smooth"})
}


    return (
        <section>

            {/* Scroll to Bottom */}
            <button onClick={scrollToBottom}>Bajar</button>
            <div style={{marginBottom: "2000    px"}}>Separador</div>

            {/* Focus y Blur */}
            <label htmlFor="name">Ingresa tu nombre</label>
            <input ref={nameRef} type="text" name='name' id='name'/>
            <button onClick={focus}>Focus</button>
            <button onClick={blur}>Blur</button>
        </section>
    )
}

export default FocusRef;
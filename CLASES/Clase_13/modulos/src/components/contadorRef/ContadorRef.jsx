import { useState, useEffect, useRef} from 'react'

const ContadorRef = () => {

    const [inputValue, setInputValue] = useState("")
    // const [count, setCount] = useState(0)
    const count = useRef(0) // devuelve un objeto {current: valor}

    useEffect(() => {
        console.log(count.current)
        count.current = count.current+1
    }, [inputValue])
    return (
        <>
        
        <h1>Contador</h1>

        <input type="text"
        value={inputValue} 
        onChange={(e) => {setInputValue(e.target.value)
        setCount(count+1)}}
        placeholder='Cómo te llamas?'
        />
        <div>
            Mi nombre es <strong>{inputValue}</strong>
        </div>
        <h1>Cantidad de Renders: {count.current} </h1>
        </>

    )
}

export default ContadorRef;
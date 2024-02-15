import { useState, useContext, createContext} from "react"

const LoginContext = createContext([])

const LoginUseContext = () => {

    const [logIn, setLogIn] = useState(false)

    return (
        <>
        <LoginContext.Provider value={[logIn, setLogIn]}>
            El usuario está {logIn? "Si" : "No"}
            <Nav/>
        </LoginContext.Provider>
        

        </>

    )
}

export default LoginUseContext

const Nav = () => {
    return (
        <section>
            <nav>
                soy nav
            </nav>
            <LoginButton/>
        </section>
    )
}

const LoginButton = () => {

    // const [logIn, setLogIn] = useState(false)
    const [logIn, setLogIn] = useContext(LoginContext)
    const handleLogIn = () => {
        setLogIn(!logIn)
    }

    return (
        <>
        Estás logeado? {logIn?"Si":"No"} <br /><br />
        <button onClick={handleLogIn}>Log in / Log out</button>
        
        </>

    )
}
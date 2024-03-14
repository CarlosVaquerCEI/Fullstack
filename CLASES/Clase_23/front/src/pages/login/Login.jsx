import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); // para que no envíe directamente el formulario y pueda hacer otras cosas

      easyFetch({
        url: "http://localhost:3000/API/v1/users/",
        method: "POST",
        body: formData,

        callback: (data) => {
            console.log("ÉXITOOO CREADO - Cree con éxito", data)
           if(data.exito){

             // imre a la página de listaLibros
             navigate("/lista")
             
           } else {
            setErrorMessage('Usuario o contraseña incorrectos')
           }
        }
    })
 };
  
    return (
      <div>
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Escribe aquí tu nombre'
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Escribe aquí tu contraseña'
            />
          </div>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </form>
        <button type="submit" onClick={handleLogin}>Iniciar sesión</button>
      </div>
    );
  
}


export default Login
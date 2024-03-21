


/**
 * 
 * Realiza una petición de Fetch - Con gestión de errores básica - Inclute señal de Abort incluida de máximo 5 segundos
 * 
 * 
 * @param {Object}              fetchOptions                    - Opciones de nuestra solicitud fetch 
 * 
 * @param {string}              fetchOptions.url                - Es la url a la que se le realizará la petición 
 * @param {string}              [fetchOptions.metodo="GET"]         - Es el método HTTP de nuestra solicitud (GET, POST, PUT, DELETE) 
 * @param {object | null}       fetchOptions.body               - El cuerpo de la petición que convertiremos a json 
 * @param {number}              [fetchOptions.timeout=5000]        - Tiempo de espera máximo en milisegundos antes de abortar la petición
 * @param {function | null}     fetchOptions.callback           - Función que se ejecuta luego de recibir los datos  
 * 
 * @returns {promise | void}                                    - Devuelve una promesa que resuelve los datos de la respuesta si no se proporciona una función de callback
 */

export const easyFetch = async ({
    url, method="GET", body = null, timeout=5000, callback=null
}) => {

    const controller = new AbortController()
    const abortTimeout = setTimeout( () => controller.abort(), timeout)

    const fetchOptions= {
        method,
        headers: {
            "Content-type" : "application/json"
        },
        signal: controller.signal
    }
    if(body) {
        fetchOptions.body = JSON.stringify(body)
    }

    try {
        const response = await fetch(url, fetchOptions)

        if(!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()

        if (callback) {
            callback(data)

        } else {
            return data
        }
    }
    catch (error) {
        console.error("Error al realizar el request", error.message)
    }
}
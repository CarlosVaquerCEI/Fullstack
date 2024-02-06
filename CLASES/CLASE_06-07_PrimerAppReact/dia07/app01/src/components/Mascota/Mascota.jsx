const Mascota = () => {

nombre ="Biscuit"
const isCallejero = true

return (

    <div>
        <h3>Mascota</h3>
        nombre: {nombre}

        {/* OPCIÓN 1 */}
        {
            isCallejero 
            ? <div>Está adoptada</div>
            : <div>Está en búsqueda de un hogar</div>
        }
        {/* OPCIÓN 2 */}
        {
            isCallejero &&  <div>Está adoptada</div>
        }
        {/* OPCIÓN 3 */}
        {
        !isCallejero &&  <div>Está adoptada</div>
        }
    </div>
)
}

export default Mascota;
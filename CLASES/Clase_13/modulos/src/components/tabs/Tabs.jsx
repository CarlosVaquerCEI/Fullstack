import { useState } from "react";
import "./Tabs.css"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleClickTab = (tabIndex) => {
        setActiveTab(tabIndex)
    }


    return (
        <section>
            {/* Botonera */}
            <div>
                {/* Cuando quiero ejecutar la función onClick y quiero mandar un valor (en este caso el tabIndex) tengo que añadir una función flecha */}
                <button onClick={() => handleClickTab(0)}>Tab 1</button>
                <button onClick={() => handleClickTab(1)}>Tab 2</button>
                <button onClick={() => handleClickTab(2)}>Tab 3</button>
            </div>
            {/* Content */}
            <div>
                {activeTab === 0 && <div>Contenido de pestaña 1</div>}
                {activeTab === 1 && <div>Contenido de pestaña 2</div>}
                {activeTab === 2 && <div>Contenido de pestaña 3</div>}
            </div>
        </section>
    )
}

export default Tabs;
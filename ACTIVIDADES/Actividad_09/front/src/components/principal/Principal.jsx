import React, { useEffect, useState } from "react";

const Principal = () => {

    useEffect(() => {
        obtenerProductos();
    }, []);

    const [images, setImages] = useState([]);

    const obtenerProductos = async () => {
        try {
            const respuestaImagenes = await fetch(`${VITE_BACKEND_DOMAIN}/API/v1/products`);
            const jsonDataImagenes = await respuestaImagenes.json();
            setImages(jsonDataImagenes);
        } catch (error) {
            console.error("Error al obtener imágenes:", error);
        }
    };

    const { VITE_BACKEND_DOMAIN, VITE_IMAGES_TITLE } = import.meta.env;
    // console.log(dataProducts)

    return (
        <>
            <h1>VERDESHOP</h1>

            {images.map((item, index) => (
                <img
                    key={index}
                    loading="lazy"
                    src={`${VITE_BACKEND_DOMAIN}/uploads/${item.img}`}
                    alt={`${VITE_IMAGES_TITLE}${item.name}`}
                />
            ))}
            
        </>

    );
};

export default Principal;
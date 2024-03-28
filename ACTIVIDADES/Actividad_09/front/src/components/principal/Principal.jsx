import React, { useEffect, useState } from "react";
import './Principal.css'
import plants from '../../assets/plants.mp4'

const Principal = () => {

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    useEffect(() => {
        obtenerProductos();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setNextIndex((prevIndex) => (prevIndex + 1) % images.length); // 
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex(nextIndex);
        }, 500); // Agregamos un pequeño retraso para que se realice la transición

        return () => clearTimeout(timer);
    }, [nextIndex]);

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

    return (
        <>
            <section className="Principal-Main">
                <div className="VideoBackground">
                    <video src={plants} autoPlay loop muted/>
                </div>
                <div className="overlay"></div>
                
                <div className="Principal-Content">
                    <h1 className="Main-Title">VERDESHOP</h1>
                    <div className="Principal-Images">
                        {images.length > 0 && (
                            <>
                                {images.map((item, index) => (
                                    <img className="Banner-Img"
                                        key={index}
                                        loading="lazy"
                                        src={`${VITE_BACKEND_DOMAIN}/uploads/${item.img}`}
                                        alt={`${VITE_IMAGES_TITLE}${item.name}`}
                                        style={{ opacity: index === currentIndex || index === nextIndex ? 1 : 0 }}
                                    />
                                ))}
                            </>
                        )}
                    </div> 
                </div>
            </section>
    
            <section className="CategoriasProductos">
                <h1>Plantas</h1>
                <h1>Mascotas</h1>
                <h1>Decoración</h1>
            </section>
        </>
    );
};

export default Principal;
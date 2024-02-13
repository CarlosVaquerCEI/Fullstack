import { v4 as uuidv4 } from 'uuid' // para obtener un id random

export const pixar = {
    header: {
        h1: {
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w",
            href: "/",
            title: "Disney Pizza"
        },
        nav: [
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Featured Films"
            },
            {
                id: uuidv4(),
                href: "/feature-films.html",
                text: "Short Films",
                submenu: [
                    { id: uuidv4(), text: "item1", href: "#" },
                    { id: uuidv4(), text: "item2", href: "#" },
                    { id: uuidv4(), text: "item3", href: "#" },
                ]
            },
            {
                id: uuidv4(),
                href: "/technology.html",
                text: "Technology",
                submenu: [
                    { id: uuidv4(), text: "item1", href: "#" },
                    { id: uuidv4(), text: "item2", href: "#" },
                    { id: uuidv4(), text: "item3", href: "#" },
                ]
            },
        ]
    },
    hero: {

        href: "/insideout.html",
        src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/11db2edf-cfab-45f3-b825-6eb0933f16f9/io2_logo.png?format=2500w",
        text: "Inside Out 2",
        backgroundsrc: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w",
        backgroundtext: "Background Hero Image",
    },
    columns: {
        imagenColumna1: {
            href: "/insideout.html",
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=750w",
            text: "Imagen 1",
        },
        imagenColumna2: {
            href: "/insideout.html",
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/14d587cf-008b-403e-aa2d-78a0d91c98cf/Home_Lower-elio.jpg?format=750w",
            text: "Imagen 2",
        },
        imagenColumna3: {
            href: "/insideout.html",
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9c25e4d4-ad11-421d-ab84-afda6157e3a5/wl_lower.jpg?format=750w",
            text: "Imagen 3",
        }
    },
    footer: {
        rrss: [
            {
                href: "facebook.com",
                src: "https://img.icons8.com/?size=256&id=59780&format=png",
                text: "Facebook",
            },
            {
                href: "twitter.com",
                src: "https://img.icons8.com/?size=256&id=60014&format=png",
                text: "Twitter",
            },
            {
                href: "youtube.com",
                src: "https://img.icons8.com/?size=256&id=62852&format=png",
                text: "Youtube",
            },
            {
                href: "instagram.com",
                src: "https://img.icons8.com/?size=256&id=59813&format=png",
                text: "Instagram",
            }
        ],

        nav: [

            {
                id: uuidv4(),
                href: "/privacy.html",
                text: "PRIVACY POLICY"
            },
            {
                id: uuidv4(),
                href: "/termsofuse.html",
                text: "TERMS OF USE",
            },
            {
                id: uuidv4(),
                href: "/rights.html",
                text: "YOUR US STATE PRIVACY RIGHTS",
            },
            {
                id: uuidv4(),
                href: "/onlineprivacy.html",
                text: "CHILDREN’S ONLINE PRIVACY POLICY",
            },
            {
                id: uuidv4(),
                href: "/interest.html",
                text: "INTEREST-BASED ADS ",
            },
        ],

        infoButton: "personalinformation.html",

    }

}
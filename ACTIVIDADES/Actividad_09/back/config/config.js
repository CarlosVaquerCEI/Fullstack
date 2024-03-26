import dotenv from 'dotenv'
dotenv.config()

console.log("enviroment es: ", process.env.DB_NODE_ENV || "development")

export const PORT = process.env.DB_PORT
export const domain = process.env.DB_DOMAIN
export const user = process.env.DB_USER
export const pass = process.env.DB_PASS
export const db = process.env.DB

export const fullDomain = `${domain}:${PORT}`
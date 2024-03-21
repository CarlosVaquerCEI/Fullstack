import dotenv from 'dotenv'


dotenv.config()

console.log(process.env)

export const PORT = process.env.PORT || 3000
export const domain = process.env.DOMAIN || "https://localhost"

export const fullDomain = `${domain}:${PORT}`

export const host = process.env.HOSTNAME || "localhost"
export const user = process.env.DB_USER || "root"
export const pass = process.env.DB_PASS || ""
export const database = process.env.DATABASE

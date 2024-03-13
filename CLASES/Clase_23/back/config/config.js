import dotenv from 'dotenv'

dotenv.config()

console.log(process.env)

export const PORT = process.env.PORT || 3000
export const domain = process.env.DOMAIN || "https://localhost"

export const fullDomain = `${domain}:${PORT}`
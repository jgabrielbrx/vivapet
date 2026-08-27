import { Pool } from "pg";

//CONEXÃO COM O BANCO DE DADOS
export const db = new Pool({
    user: process.env.BD_USER || 'postgres',
    host: process.env.BD_HOST || 'localhost',
    database: process.env.BD_NAME || 'vivapet',
    password: process.env.BD_PASSWORD || 'BemVindo!', //tem que ser a senha que colocou quando instalou o pgAdmin4
    port: parseInt(process.env.DB_PORT || 'S432'),
    
})
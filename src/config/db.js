import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();

console.log(process.env.DB_USER,)
console.log(process.env.DB_HOST,)

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

pool.on("connect", ()=>{
  console.log("Connection pool established with Database");
})

export default pool;
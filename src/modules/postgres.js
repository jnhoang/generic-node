import 'dotenv/config'
import { Pool } from 'pg'

const conn_values = {
  user     :  process.env.POSTGRES_USER,
  host     :  process.env.POSTGRES_HOST,
  password :  process.env.POSTGRES_PASSWORD,
  database :  process.env.POSTGRES_DB_NAME,
  port     :  5432,
}

export const select_sql = async(query) => {
  const pool   =  new Pool(conn_values);
  const client =  await pool.connect()
  const res    =  await client.query(query)
  client.release()
  return res;
}

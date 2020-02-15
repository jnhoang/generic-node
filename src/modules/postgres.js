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
  try{
    const pool   =  new Pool(conn_values);
    const client =  await pool.connect();
    const res    =  await client.query(query);
    client.release();
    return res;
  }
  catch(err) {
    console.log(`postgres.select_sql error: ${err}`)
    return {}
  }
}

export const process_sql_row = (row) => {
  [
    {
      interaction_id :  1,
      description    :  'secret world of richard scary',
      trigger        :  'time to love and play',
      response       :  '%scgV3vdOT09I',
      env_vars       :  'YOUTUBE_VIDEO_URL',
    }
  ]

}

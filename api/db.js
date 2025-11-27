import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'sql308.infinityfree.com',
  user: process.env.DB_USER || 'if0_40444443',
  password: process.env.DB_PASSWORD || 'Borrego132',
  database: process.env.DB_NAME || 'if0_40444443_petconnect',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool;

export default async function getConnection() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool.getConnection();
}

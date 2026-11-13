import {Pool} from "pg";

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'nextjsdemo_db',
});

const myConnection = async () => {
    const res = await pool.query('SELECT $1 AS message', ['Database Connected!']);
    console.log(res.rows[0].message);
};

try {
    myConnection();
} catch (error) {
    console.error('Error connecting to the database:', error);
};

export default pool;
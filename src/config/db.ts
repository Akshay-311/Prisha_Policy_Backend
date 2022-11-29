import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'DomSec#123',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

export default pool;
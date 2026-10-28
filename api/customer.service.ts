import pool from './database.ts';

interface CustomerOptions{
    id: number;
    name: string;
    email: string;
}

export async function findCustomersOptions(): Promise<CustomerOptions[]> {
   const connect = await pool.query<CustomerOptions>('SELECT id, name, email FROM customers ORDER BY name;');

   return connect.rows;
}

import pool from './database.ts';

interface CustomerOptions{
    id: number;
    email: string;
}

export async function findCustomersOptions(): Promise<CustomerOptions[]> {
   const connect = await pool.query<CustomerOptions>('SELECT ID, email FROM customers ORDER BY name;');

   return connect.rows;
}

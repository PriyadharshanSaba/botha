import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const connectionString = process.env.DB_URL!;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: true,
  },
  connectionTimeoutMillis: 5000,  // avoid long hangs
  idleTimeoutMillis: 5000,
});

export const db = drizzle(pool);

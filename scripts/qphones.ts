import { config } from "dotenv";
config({ path: ".env.local" });
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DB_URL });
const sql = `
SELECT u.email, u.first_name || ' ' || u.last_name AS name, (i.buyer_snapshot->>'phone') AS phone
FROM users u
LEFT JOIN LATERAL (
  SELECT buyer_snapshot FROM invoices
  WHERE user_id = u.id AND buyer_snapshot->>'phone' IS NOT NULL
  ORDER BY invoice_date DESC LIMIT 1
) i ON true
ORDER BY u.created_at;
`;
pool.query(sql).then(r => { console.table(r.rows); return pool.end(); }).catch(e => { console.error(e); process.exit(1); });

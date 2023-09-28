import { Pool } from "pg";
import { DATABASE } from "@/config";

const pg = new Pool({
  host: DATABASE.host,
  port: DATABASE.port,
  user: DATABASE.user,
  password: DATABASE.password,
  database: DATABASE.name,
});

export default pg;

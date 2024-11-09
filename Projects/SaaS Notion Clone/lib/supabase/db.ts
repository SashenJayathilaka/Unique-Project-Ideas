import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../migrations/schema";
import { migrate } from "drizzle-orm/node-postgres/migrator";
dotenv.config({ path: "env" });

if (!process.env.DATABASE_URL) {
  console.log("Cannot Find database Url");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
/* const migrateDb = async () => {
  try {
    console.log("Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Successfully Migrated");
  } catch (error) {
    console.log("Error");
  }
};
migrateDb(); */
export default db;

// 4.55

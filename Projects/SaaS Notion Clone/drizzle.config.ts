import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("Cannot Find database Url");
}

export default defineConfig({
  schema: "./lib/supabase/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    database: "postgres",
    port: 5432,
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    user: "postgres.qrfelesatfsfyhtmcxmc",
    password: process.env.PW || "",
  },
});

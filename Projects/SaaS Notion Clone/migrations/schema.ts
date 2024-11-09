import {
  pgTable,
  pgEnum,
  uuid,
  timestamp,
  text,
  foreignKey,
  jsonb,
  boolean,
  bigint,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const aal_level = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const code_challenge_method = pgEnum("code_challenge_method", [
  "s256",
  "plain",
]);
export const factor_status = pgEnum("factor_status", [
  "unverified",
  "verified",
]);
export const factor_type = pgEnum("factor_type", ["totp", "webauthn"]);
export const one_time_token_type = pgEnum("one_time_token_type", [
  "confirmation_token",
  "reauthentication_token",
  "recovery_token",
  "email_change_token_new",
  "email_change_token_current",
  "phone_change_token",
]);
export const key_status = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
]);
export const key_type = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
]);
export const pricing_plan_interval = pgEnum("pricing_plan_interval", [
  "day",
  "week",
  "month",
  "year",
]);
export const pricing_type = pgEnum("pricing_type", ["one_time", "recurring"]);
export const subscription_status = pgEnum("subscription_status", [
  "trialing",
  "active",
  "canceled",
  "incomplete",
  "incomplete_expired",
  "past_due",
  "unpaid",
]);
export const action = pgEnum("action", [
  "INSERT",
  "UPDATE",
  "DELETE",
  "TRUNCATE",
  "ERROR",
]);
export const equality_op = pgEnum("equality_op", [
  "eq",
  "neq",
  "lt",
  "lte",
  "gt",
  "gte",
  "in",
]);

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  workspace_owner: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  data: text("data"),
  in_trash: text("in_trash"),
  logo: text("logo"),
  banner_url: text("banner_url"),
  icon_id: text("icon_id").notNull(),
});

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text("title").notNull(),
  data: text("data"),
  in_trash: text("in_trash"),
  banner_url: text("banner_url"),
  workspace_id: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
  folder_id: uuid("folder_id").references(() => folders.id, {
    onDelete: "cascade",
  }),
  icon_id: text("icon_id").notNull(),
});

export const folders = pgTable("folders", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text("title").notNull(),
  data: text("data"),
  in_trash: text("in_trash"),
  banner_url: text("banner_url"),
  workspace_id: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
  icon_id: text("icon_id").notNull(),
});

export const collaborators = pgTable("collaborators", {
  workspace_id: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  id: uuid("id").defaultRandom().primaryKey().notNull(),
});

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().notNull(),
    full_name: text("full_name"),
    avatar_url: text("avatar_url"),
    billing_address: jsonb("billing_address"),
    updated_at: timestamp("updated_at", { withTimezone: true, mode: "string" }),
    payment_method: jsonb("payment_method"),
    email: text("email"),
  },
  (table) => {
    return {
      users_id_fkey: foreignKey({
        columns: [table.id],
        foreignColumns: [table.id],
        name: "users_id_fkey",
      }),
    };
  }
);

export const customers = pgTable("customers", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .references(() => users.id),
  stripe_customer_id: text("stripe_customer_id"),
});

export const products = pgTable("products", {
  id: text("id").primaryKey().notNull(),
  active: boolean("active"),
  name: text("name"),
  description: text("description"),
  image: text("image"),
  metadata: jsonb("metadata"),
});

export const prices = pgTable("prices", {
  id: text("id").primaryKey().notNull(),
  product_id: text("product_id").references(() => products.id),
  active: boolean("active"),
  description: text("description"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  unit_amount: bigint("unit_amount", { mode: "number" }),
  currency: text("currency"),
  type: pricing_type("type"),
  interval: pricing_plan_interval("interval"),
  interval_count: integer("interval_count"),
  trial_period_days: integer("trial_period_days"),
  metadata: jsonb("metadata"),
});

export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey().notNull(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => users.id),
  status: subscription_status("status"),
  metadata: jsonb("metadata"),
  price_id: text("price_id").references(() => prices.id),
  quantity: integer("quantity"),
  cancel_at_period_end: boolean("cancel_at_period_end"),
  created: timestamp("created", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  current_period_start: timestamp("current_period_start", {
    withTimezone: true,
    mode: "string",
  })
    .default(sql`now()`)
    .notNull(),
  current_period_end: timestamp("current_period_end", {
    withTimezone: true,
    mode: "string",
  })
    .default(sql`now()`)
    .notNull(),
  ended_at: timestamp("ended_at", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  cancel_at: timestamp("cancel_at", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  canceled_at: timestamp("canceled_at", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  trial_start: timestamp("trial_start", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  trial_end: timestamp("trial_end", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
});

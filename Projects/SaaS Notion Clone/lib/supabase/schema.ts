import { prices, subscription_status, users } from "@/migrations/schema";
import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  timestamp,
  text,
  boolean,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  workspacesOwner: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
});

export const folders = pgTable("folders", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  bannerUrl: text("banner_url"),
  workspacesId: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
});

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  bannerUrl: text("banner_url"),
  workspacesId: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
  folderId: uuid("folder_id").references(() => folders.id, {
    onDelete: "cascade",
  }),
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

export const collaborators = pgTable("collaborators", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  workspacesId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"status" "subscription_status",
	"metadata" jsonb,
	"price_id" text,
	"quantity" integer,
	"cancel_at_period_end" boolean,
	"created" timestamp with time zone DEFAULT now() NOT NULL,
	"current_period_start" timestamp with time zone DEFAULT now() NOT NULL,
	"current_period_end" timestamp with time zone DEFAULT now() NOT NULL,
	"ended_at" timestamp with time zone DEFAULT now() NOT NULL,
	"cancel_at" timestamp with time zone DEFAULT now() NOT NULL,
	"canceled_at" timestamp with time zone DEFAULT now() NOT NULL,
	"trial_start" timestamp with time zone DEFAULT now() NOT NULL,
	"trial_end" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "files" ADD COLUMN "icon_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "folders" ADD COLUMN "icon_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "workspaces" ADD COLUMN "icon_id" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_price_id_prices_id_fk" FOREIGN KEY ("price_id") REFERENCES "public"."prices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

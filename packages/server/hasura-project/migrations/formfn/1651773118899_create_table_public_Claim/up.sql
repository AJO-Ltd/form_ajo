CREATE TABLE "public"."Claim" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "userId" text NOT NULL, "auctionNftId" text NOT NULL, "proof" text, "claimTransactionId" uuid, "timeCreated" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("claimTransactionId"));COMMENT ON TABLE "public"."Claim" IS E'Tracks eligible claims for participation NFT distributions to auction bidders.';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
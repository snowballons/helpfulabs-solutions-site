
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  resources: defineTable({
    title: v.string(),
    description: v.string(),
    type: v.string(),
    format: v.string(),
    pages: v.string(),
    category: v.string(),
    icon: v.string(),
    popular: v.boolean(),
    fileId: v.id("_storage"),
  }),
});

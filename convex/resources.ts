
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getResources = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("resources").collect();
  },
});

export const getResource = query({
  args: { id: v.id("resources") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const addResource = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    type: v.string(),
    format: v.string(),
    pages: v.string(),
    category: v.string(),
    icon: v.string(),
    popular: v.boolean(),
    fileId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("resources", args);
  },
});

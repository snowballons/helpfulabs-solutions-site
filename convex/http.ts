
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

const http = httpRouter();

http.route({
  path: "/downloadFile",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const { searchParams } = new URL(request.url);
    const resourceId = searchParams.get("resourceId") as Id<"resources">;

    if (!resourceId) {
      return new Response("Missing 'resourceId' parameter", { status: 400 });
    }

    const resource = await ctx.runQuery(api.resources.getResource, { id: resourceId });

    if (resource === null) {
      return new Response("Resource not found", { status: 404 });
    }

    const file = await ctx.storage.get(resource.fileId);

    if (file === null) {
      return new Response("File not found", { status: 404 });
    }

    return new Response(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${resource.title}"`,
        "Content-Type": "application/octet-stream",
      },
    });
  }),
});

export default http;

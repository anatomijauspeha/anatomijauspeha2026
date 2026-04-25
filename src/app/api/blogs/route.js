import { getBlogs } from "../../../../lib/endpoints/server";

export async function GET() {
  try {
    const blogs = await getBlogs();
    return Response.json({
      success: true,
      data: blogs
    });
  } catch (error) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
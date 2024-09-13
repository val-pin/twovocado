import PostModel from "@/models/post";
import dbConnect from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  console.log("endpoint working");
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("userId");

  try {
    await dbConnect();
    const allPosts = await PostModel.find({});
    console.log("allPosts", allPosts);
    const data = {
      message: "login succesfull",
      numberOfPosts: allPosts.length,
      posts: allPosts,
    };
    return Response.json({ data });
  } catch (error) {
    console.log("error", error);
    return Response.json({ error: "someting went wrong" });
  }
}

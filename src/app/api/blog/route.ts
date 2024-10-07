import { Post } from "@/db/models";
import { connectToDb } from "@/db/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
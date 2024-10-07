import { unstable_noStore as noStore } from "next/cache";
// import { Posts } from "@/app/blog/page";
import { Post, User } from "@/db/models";
import { connectToDb } from "@/db/utils";

// TEMPORARY DATA
// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "Jane" },
// ];

// const posts : Posts[] = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
    console.log("in request to get posts");
    // return posts;
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("retured posts>>>>>>>>>>>>", posts)
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string) => {
    console.log("id", slug, typeof slug);
    // return posts.find((post) => post.id === parseInt(slug))
  try {
    connectToDb();
    const post = await Post.findOne({ _id: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: number) => {
    // return users.find((user) => user.id === id)
  noStore(); //to stop data cache
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
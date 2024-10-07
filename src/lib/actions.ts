"use server";

//******************
//Can server actions replace the API routes and click events. 
//The answer is no. 
//For Complex application and multiple platform API routes. Because we can dispatch server actions only from the website. And also for the bigger schemas using the API route is a better option. 
//Server actions are good for simple things, for anything Complex use API route.

import { Post, User } from "@/db/models";
import { connectToDb } from "@/db/utils";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs';

// import { signIn, signOut } from "./auth";
// import bcrypt from "bcryptjs";

// ******* we won't need to declare "use server" in every function if it is declared on top
// export const serverActionHello = async() => { // server action always has acync even we don't need await
//     "use server";
//     console.log("hello server action");
// };

export const addPost = async (formData: any) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  
  export const handleLogout = async () => {
    "use server";
    await signOut();
  };

  export const register = async (previousState:any, formData:any) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const login = async (prevState: any, formData: any) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err: any) {
      console.log(err);
  
      if (err?.message?.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };

  export const deletePost = async (formData: any) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const addUser = async (prevState: any,formData: any) => {
    const { username, email, password, img } = Object.fromEntries(formData);
  
    try {
      connectToDb();
      const newUser = new User({
        username,
        email,
        password,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

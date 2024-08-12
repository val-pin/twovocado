"use server";

import Post from "@/models/Post";

const addPost = async (post: FormData) => {
  //post: complains bc of TypeScript, but doesn't concern the functionality

  const title = post.get("title");
  const description = post.get("description");
  const user = post.get("user");
  console.log(title, description, user);

  try {
    const newPost = new Post({ title, description, user });
    await newPost.save();
  } catch (error) {
    console.log("error", error);
  }
};

export { addPost };

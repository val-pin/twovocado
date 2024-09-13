"use server";

import Post from "@/models/Post";

const addPost = async (post: FormData | any) => {
  //post: complains bc of TypeScript, but doesn't concern the functionality

  const title = post.get("title");
  const description = post.get("description");
  const user = post.get("user");
  const picture = post.get("picture");
  console.log(title, description, user, picture);

  try {
    const newPost = new Post({ title, description, user, picture });
    await newPost.save();
    // return newPost;
  } catch (error) {
    console.log("error", error);
  }
};

export { addPost };

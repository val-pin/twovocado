"use server";

import Post from "@/models/Post";

const addPost = async (post) => {
  //post: complains bc of TypeScript, but doesn't concern the functionality

  const title = post.get("title");
  const description = post.get("description");

  const newPost = new Post({ title, description });
  return newPost.save();
};

export { addPost };

import { addPost } from "@/actions/postActions";
import React from "react";

function PostsPage() {
  return (
    <form action={addPost}>
      <div>
        <label>Title</label>
        <input name="title" type="text" />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default PostsPage;

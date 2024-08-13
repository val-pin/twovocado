import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,

    //plus the uid from firebase
  },
});
const PostModel = mongoose.models.Post || mongoose.model("Post", postSchema);

export default PostModel;

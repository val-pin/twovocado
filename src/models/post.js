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
  picture: {
    type: String,
    default:
      "https://i.pinimg.com/originals/87/91/1c/87911c1f41fae2b4b70ace96e7252c8a.jpg",
  },
});
const PostModel = mongoose.models.Post || mongoose.model("Post", postSchema);

export default PostModel;

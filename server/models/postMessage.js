import mongoose from "mongoose";

// create a schema, each schema maps to MongoDB collection and defines the shape of the documents within that collection
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// compile previus schema into a model, a model is a class which is used to construct documents
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); // .find() access to all documents in the PostMessage model
    console.log(postMessages);
    res.status(200).json(postMessages); // sets the HTTP status for the response, and send a json object
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post); // creates a new document for the postmessagescollection

  try {
    await newPost.save() // saves the new document into db
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};
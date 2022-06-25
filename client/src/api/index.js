import axios from "axios";

const url = "http://localhost:5000/posts"; // url for backend connection

export const fetchPosts = () => axios.get(url); // send GET request to provided url using axios
export const createPost = (newPost) => axios.post(url, newPost); // send POST request returns the passed object
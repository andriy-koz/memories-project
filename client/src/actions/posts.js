import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // send GET request to ".../posts" and save incoming data
    dispatch({ type: "FETCH_ALL", payload: data }); // pass data to reducer, returns the same data
  } catch (error) {
    console.log(error.message);
  }
}

// recieves a "post" object and returns an array with new post added 
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); // sends POST request with the passed post object
    dispatch({ type: "CREATE", payload: data }); // returns [...posts, action.payload]
  } catch (error) {
    console.log(error.message);
  }
}
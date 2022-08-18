import axios from "axios";

export const getPost = id => {
  const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response;
}

export const getUser = id => {
  const reponse = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return reponse;
}


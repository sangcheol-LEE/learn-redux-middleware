import axios from "axios";

export const getPhoto = () => {
  const response = axios.get(`https://jsonplaceholder.typicode.com/photos`)
  return response
}

export const getComment = id => {
  const response = axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  return response
}
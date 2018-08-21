import axios from 'axios'
const BASE_URL = 'http://localhost:5000/artists'

export const get = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const add = async (name, genre) => {
  const response = await axios.post(BASE_URL, {name, genre})
  return response.data
}

export const remove = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`)
  return response.data
}

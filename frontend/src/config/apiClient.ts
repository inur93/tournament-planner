import axios from 'axios'
import { ApiClient } from '../api/ApiClient'

export const baseUrl = 'https://localhost:5001'
const instance = axios.create({
  // baseURL: ''
})

export default new ApiClient(baseUrl, instance)

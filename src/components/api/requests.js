import axios from 'axios'

const baseUrl = 'https://api.github.com'

export const makeRequests = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  baseUrl,
  url,
  method,
  data,
  headers
})

import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

const apiRequests = {
getPostsData: async (): Promise<any> => {
  console.log('request start')
  await instance.get<any, AxiosResponse<any>>(`url`)
    .then(response => {
      console.log(response)
      return response.data
    })
  },

  addPost: async (post: any): Promise<any> => (
    await instance.post<any, AxiosResponse<any>>(`tasks`, post)
      .then(response => {
        console.log(response)
        return response.data
      })
  ),
}

export default apiRequests;
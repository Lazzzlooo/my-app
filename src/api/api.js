import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cbbda7ce-b060-4e6f-8415-bcb9dd96adff'
  }
})

export const UserAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(responsive => responsive.data)
  },

  toggleFollow(followed, userId) {
    if (followed) {
      return instance.delete(`follow/${userId}`)
      .then(responsive => responsive.data)
    } else {
      instance.post(`follow/${userId}`, {})
      .then(responsive => responsive.data)
    }
  }
}

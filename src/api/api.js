import * as axios from 'axios';

const instance = axios.create({
  withCredentials: 1,
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

  toggleFollow(userId, followed) {
    if (followed) {
      return instance.delete(`follow/${userId}`)
      .then(responsive => responsive.data)
    } else {
      return instance.post(`follow/${userId}`, {})
      .then(responsive => responsive.data)
    }

  },

  auth() {
    return instance.get(`auth/me`)
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
}
export const AuthAPI = {

  authMe() {
    return instance.get(`auth/me`)
  },
}

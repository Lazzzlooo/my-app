import * as axios from 'axios';

const instance = axios.create({
  withCredentials: 1,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cbbda7ce-b060-4e6f-8415-bcb9dd96adff'
  }
})

export const UserAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  },

  toggleFollow(userId, followed) {
    if (followed) {
      return instance.delete(`follow/${userId}`)
      .then(response => response.data)
    } else {
      return instance.post(`follow/${userId}`)
      .then(response => response.data)
    }

  }
}
export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})

  }
}


export const AuthAPI = {

  authMe() {
    return instance.get(`auth/me`)
  },
  /*login(email, password, rememberMe) {
    return instance.post(`/auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
    })
  },
  logout() {
    return instance.delete(`auth/login`)
  }*/
}

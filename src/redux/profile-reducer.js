import {ProfileAPI} from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

const initialState = {
  user: {
    id: 1,
    firstName: 'Amilia',
    lastName: 'Luna',
    job: 'Designer',
    birthday: 'February 21, 2000',
    currentCity: 'Boston',
    website: 'http:/www.xyz.com',
    isOnline: 'last seen one hour ago'
  },
  profile: null,
  status: ''

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  ProfileAPI.getProfile(userId)
  .then(response => {
    dispatch(setUserProfile(response.data));
  })
}
export const getUserStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId)
  .then(response => {
    dispatch(setUserStatus(response.data));
  })
}
export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  })
}
export default profileReducer;
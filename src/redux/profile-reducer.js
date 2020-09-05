const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  profile: null

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    default:
      return state
  }

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;
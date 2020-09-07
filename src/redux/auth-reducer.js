import {AuthAPI} from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}


    default:
      return state
  }
}

export const setUsersData = (userId, login, email) => ({type: SET_USERS_DATA, data: {userId, login, email}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getAuthUserData = () => (dispatch) => {
  AuthAPI.authMe()
  .then(responsive => {
    if (!responsive.data.resultCode) {
      let {id, login, email} = responsive.data.data
      dispatch(setUsersData(id, login, email));
    }

  })
}


export default authReducer;
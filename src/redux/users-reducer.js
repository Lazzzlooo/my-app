import {UserAPI} from '../api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   name: 'Ivan',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   name: 'Alex',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   name: 'Sam',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   name: 'John',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 5,
    //   followed: false,
    //   name: 'Ivan',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 6,
    //   followed: true,
    //   name: 'Ivan',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // },
    // {
    //   id: 7,
    //   followed: false,
    //   name: 'Ivan',
    //   status: 'I\'m fine',
    //   photos: {
    //     small: null
    //   }
    // }
  ],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed};
          }
          return user;
        })
      }

    case SET_USERS:
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}

export const toggleFollowSuccess = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  UserAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  })
}

export const follow = (userId, followed) => async (dispatch) => {
  dispatch(toggleFollowSuccess(userId))
  dispatch(toggleFollowingProgress(true, userId))
  await UserAPI.toggleFollow(userId, followed)
  dispatch(toggleFollowingProgress(false, userId))
}



export default usersReducer;
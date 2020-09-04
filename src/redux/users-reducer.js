const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


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
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed};
          }
          return u;
        })
      }

    case SET_USERS:
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}




    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export default usersReducer;
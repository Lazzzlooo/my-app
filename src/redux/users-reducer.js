const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   firstName: 'Ivan',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Tomsk'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   firstName: 'Alex',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Tomsk'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   firstName: 'Sam',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Moscow'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   firstName: 'John',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Ufa'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 5,
    //   followed: false,
    //   firstName: 'Ivan',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Kazan'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 6,
    //   followed: true,
    //   firstName: 'Ivan',
    //   lastName: 'Alekseev',
    //   location: {country: 'England', city: 'London'},
    //   status: 'I\'m fine'
    // },
    // {
    //   id: 7,
    //   followed: false,
    //   firstName: 'Ivan',
    //   lastName: 'Alekseev',
    //   location: {country: 'Russia', city: 'Tomsk'},
    //   status: 'I\'m fine'
    // }
  ]
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
      return {...state, users: [...state.users, ...action.users]}


    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
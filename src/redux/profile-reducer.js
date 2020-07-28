let initialState = {user: {
    id: 1,
    firstName: 'Amilia',
    lastName: 'Luna',
    job: 'Designer',
    birthday: 'February 21, 2000',
    currentCity: 'Boston',
    website: 'http:/www.xyz.com',
    isOnline: 'last seen one hour ago'
  }}

const profileReducer = (state = initialState, action) => {
  return state;
}
export default profileReducer;
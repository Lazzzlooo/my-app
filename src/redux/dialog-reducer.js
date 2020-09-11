const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych', message: 'Hi'},
    {id: 2, name: 'Andrew', message: 'How'},
    {id: 3, name: 'Sveta', message: 'Yo'},
    {id: 4, name: 'Sasha', message: 'Yo'},
    {id: 5, name: 'Viktor', message: 'Yo'},
    {id: 6, name: 'Valera', message: 'How is your it-kamasutra?'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'What'},
    {id: 4, message: 'do'},
    {id: 5, message: 'You'}
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessageBody}],
      };
    default:
      return state;
  }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
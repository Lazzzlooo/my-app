const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: state.messages.length + 1, message: body}],
        newMessageBody: ''
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
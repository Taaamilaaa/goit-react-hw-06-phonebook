import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContact } from "./actions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsListReducer = createReducer(initialState, {
  [addContact]: (state, {payload}) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload),
});

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contactsListReducer,  
    filterReducer,//   
  
});

////////////////////////////Redux
// export const contactsListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contact/add":
//       return [...state, action.payload];
//     case "contact/delete":
//       return state.filter((contact) => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "contactList/filter":
//       return action.payload;   
//     default:      
//   return state;
//   }
    
// }

// export const rootReducer = combineReducers({
//   contacts: contactsListReducer,
//   filter: filterReducer,
  
// });
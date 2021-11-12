// import { createReducer } from '@reduxjs/toolkit';

// import { addContact, deleteContact, filterContact, filteredContacts } from "./actions";
import { combineReducers } from "redux";  //Redux
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// export const contactsListReducer = createReducer(initialState, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload.id),
// })


// export const filterReducer = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });
// export const visibleCont = createReducer([], {
//   [filteredContacts]: (_, action) => [...action.payload],
// });

//////////////////////////////Redux
export const contactsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contact/add":
      return [...state, action.payload];
    case "contact/delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "contactList/filter":
      return action.payload;   
    default:      
  return state;
  }
    
}
export const visibleCont = (state = [], action) => {
    switch (action.type) {   
    case "contactList/filteredCont":
      return [...action.payload];
    default:      
  return state;
  }
}
export const rootReducer = combineReducers({
  contacts: contactsListReducer,
  filter: filterReducer,
  filteredCont: visibleCont,
});
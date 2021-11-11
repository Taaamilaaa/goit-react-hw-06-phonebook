import {addContact, deleteContact} from "./actions";
import { combineReducers } from "redux";

const initialState =
    [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];


const contactsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contact/add":
            return [...state, action.payload];
        case "contact/delete":
            return state.filter(contact => contact.id !== action.payload.id
            );
        default:
            return state;
     }      
};

const filterReducer = (state = "", action) => {
   
    return state;     
};

export const rootReducer = combineReducers({
    contacts: contactsListReducer,
    filter: filterReducer,
})
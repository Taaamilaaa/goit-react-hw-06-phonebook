export const addContact = (contact) => {
    return {
        type: "contact/add",
        payload: contact,
    }  
};
export const deleteContact = (id) => {
    return {
        type: "contact/delete",
        payload: {id},
    }
};

export const filterContact = (value) => {
    return {
        type: "contactList/filter",
        payload: value,
    }
};
export const filteredContacts = (arrCont) => {
    return {
        type: "contactList/filteredCont",
        payload: arrCont,
    }
};

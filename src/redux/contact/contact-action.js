// import contactTypes from "./contact-types";
import { createAction } from "@reduxjs/toolkit";

// export const addContact = ({ name, number }) => ({
//   type: contactTypes.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");

export const addContactRequest = createAction("addContactRequest");
export const addContactSuccess = createAction("addContactSuccess");
export const addContactError = createAction("addContactError");

// export const addContact = createAction("addContact", ({ name, number }) => ({
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// }));

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

// export const deleteContact = createAction("deleteContact");
//   (todoId) => ({
//   type: contactTypes.DEL,
//   payload: todoId,
// });

export const filterContactRequest = createAction("filterContactRequest");
export const filterContactSuccess = createAction("filterContactSuccess");
export const filterContactError = createAction("filterContactError");

export const filterContact = createAction("filterContact");
//   (value) => ({
//   type: contactTypes.FIL,
//   payload: value,
// });

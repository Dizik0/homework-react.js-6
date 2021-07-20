import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import contactTypes from "./contact-types";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "../../redux/contact/contact-action";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactTypes.ADD:
//       return [...state, payload];

//     case contactTypes.DEL:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const loger = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});
// (state = "", { type, payload }) => {
//   switch (type) {
//     case actions.filterContact:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
  loger,
});

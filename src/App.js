import "./App.css";
import { v4 as uuidv4 } from "uuid";
// import { Component } from "react";
import { connect } from "react-redux";
import AddContact from "./Components/AddContact";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import style from "./App.module.scss";

const App = ({ logger }) => {
  return (
    <div className={style.box}>
      {/* {logger && <h1 className={style.loader}>Загрузка...</h1>} */}
      {/* 
      <img
        className={style.loader}
        src="https://i.gifer.com/74H8.gif"
        alt="logger"
      /> */}
      {logger && <div className={style.loader}>Загрузка...</div>}

      <h1 className={style.title}>Phonebook</h1>
      <AddContact uuidv4={uuidv4} />
      <h2 className={style.title}>Contacts</h2>
      <Filter uuidv4={uuidv4} />
      <ContactList uuidv4={uuidv4} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  logger: state.contact.loading,
});

export default connect(mapStateToProps)(App);

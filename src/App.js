import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import store from "./store";
import Notes from "./Notes/Notes";
import Note from "./Note/Note";
//import addANote from "./AddANote/AddANote";

import AddAFolder from "./AddAFolder/AddAFolder";

import "./App.css";
import { Route } from "react-router-dom";

//////////////
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { ...store };
  }
  s;
  createFolder = (e, history) => {
    e.preventDefault();

    let newFolder = {
      name: e.target.title.value,
      id: this.state.folders.length + 1,
    };
    console.log(newFolder);
    this.setState(
      {
        folders: [...this.state.folders, newFolder],
      },
      () => {
        history.push("/");
      }
    );
  };

  deleteNote = (e, id) => {
    this.setState({
      notes: this.state.notes.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className="global">
          <Route
            path="/"
            render={(rprops) => <Aside {...rprops} {...this.state} />}
          />
          <Route
            exact
            path="/"
            render={(rprops) => (
              <Notes {...rprops} {...this.state} deleteNote={this.deleteNote} />
            )}
          />
          <Route
            path="/folder/:id"
            render={(rprops) => (
              <Notes {...rprops} {...this.state} deleteNote={this.deleteNote} />
            )}
          />
          <Route
            path="/note/:id"
            render={(rprops) => (
              <Note {...rprops} {...this.state} deleteNote={this.deleteNote} />
            )}
          />
          <Route
            path="/addAFolder"
            render={(rprops) => (
              <AddAFolder {...rprops} createFolder={this.createFolder} />
            )}
          />
        </div>
      </div>
    );
  }
}

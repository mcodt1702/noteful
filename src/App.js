import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import store from "./store";
import Notes from "./Notes/Notes";
import Note from "./Note/Note";
import AddANote from "./AddANote/AddANote";
import Context from "./Context";

import AddAFolder from "./AddAFolder/AddAFolder";

import "./App.css";
import { Route } from "react-router-dom";

//////////////
export default class App extends React.Component {
  state = {
    ...store,

    createFolder: (e, history) => {
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
    },

    deleteNote: (e, id) => {
      this.setState({
        notes: this.state.notes.filter((item) => item.id !== id),
      });
    },

    createANote: (e, id) => {
      e.preventDefault();

      let newNote = {
        id: id,
        name: e.target.name.value,

        modified: "",
        folderId: e.target.folders.value,
        content: e.target.content.value,
      };

      console.log(newNote);
      this.setState({
        notes: [...this.state.notes, newNote],
      });
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
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
                <Notes
                  {...rprops}
                  {...this.state}
                  deleteNote={this.deleteNote}
                />
              )}
            />
            <Route
              path="/folder/:id"
              render={(rprops) => (
                <Notes
                  {...rprops}
                  {...this.state}
                  deleteNote={this.deleteNote}
                />
              )}
            />
            <Route
              path="/note/:id"
              render={(rprops) => (
                <Note
                  {...rprops}
                  {...this.state}
                  deleteNote={this.deleteNote}
                />
              )}
            />
            <Route
              path="/addAFolder"
              render={(rprops) => (
                <AddAFolder {...rprops} createFolder={this.createFolder} />
              )}
            />

            <Route
              path="/addANote"
              render={(rprops) => (
                <AddANote
                  {...rprops}
                  {...this.state}
                  createANote={this.createANote}
                />
              )}
            />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

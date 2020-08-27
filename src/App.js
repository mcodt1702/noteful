import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Context from "./Context";
import Folders from "./Folders/Folders";
import Note from "./Note/Note";
import AddANote from "./AddANote/AddANote";

import ExecutionError from "./ExecutionError";

import AddAFolder from "./AddAFolder/AddAFolder";

import "./App.css";
import { Route } from "react-router-dom";

//////////////
export default class App extends React.Component {
  state = {
    folders: [],
    notes: [],

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
          fetch("https://nameless-mountain-76015.herokuapp.com/folders", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFolder),
          }).then((res) => res.json());
        },

        () => {
          history.push("/");
        }
      );
    },
    deleteFolder: (id) => {
      fetch(`https://nameless-mountain-76015.herokuapp.com/folders/${id}`, {
        method: "delete",
        headers: { "Content-type": "application/jason" },
      });
      const idp = parseInt(id);
      console.log(id);
      this.setState({
        folders: this.state.folders.filter(
          (folder) => folder.folder_id !== idp
        ),
      });
    },

    deleteNote: (id) => {
      fetch(`https://nameless-mountain-76015.herokuapp.com/notes/${id}`, {
        method: "delete",
        headers: { "Content-type": "application/jason" },
      });
      const idp = parseInt(id);
      console.log(id);
      this.setState({
        notes: this.state.notes.filter((note) => note.note_id !== idp),
      });
    },

    createANote: (e, rprops) => {
      e.preventDefault();
      rprops.history.push(`/folder/${e.target.folders.value}`);

      let newNote = {
        name: e.target.name.value,
        modified: new Date(),
        folder_id: e.target.folders.value,
        content: e.target.content.value,
      };

      console.log(newNote);
      fetch("https://nameless-mountain-76015.herokuapp.com/notes", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((newNote) => {
          this.setState({
            notes: [...this.state.notes, newNote],
          });
        });
    },
  };

  componentDidMount() {
    fetch("https://nameless-mountain-76015.herokuapp.com/notes")
      .then((res) => res.json())
      .then((notes) => this.setState({ notes }));

    fetch("https://nameless-mountain-76015.herokuapp.com/folders")
      .then((res) => {
        // check if response is ok
        console.log("About to check for errors");
        if (!res.ok) {
          console.log("An error did occur, let's throw an error.");
          throw new Error("Something went wrong"); // throw an error
        }
        return res; // ok, so just continue
      })
      .then((res) => res.json())
      .then((folders) => this.setState({ folders }))
      .catch((err) => {
        // this catch handles the error condition
        console.log("Handling the error here.", err);
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path="/" component={Header} />
          <div className="global">
            <ExecutionError>
              <Route path="/" component={Aside} />
              <Route exact path="/" component={Folders} />
              <Route path="/folder/:id" component={Folders} />
            </ExecutionError>
            <ExecutionError>
              <Route path="/note/:id" component={Note} />
            </ExecutionError>
            <ExecutionError>
              <Route path="/addAFolder" component={AddAFolder} />

              <Route path="/addANote" component={AddANote} />
            </ExecutionError>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

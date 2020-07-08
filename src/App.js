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
          fetch("http://localhost:9090/folders", {
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

    deleteNote: (e, id) => {
      this.setState({
        notes: this.state.notes.filter((item) => item.id !== id),
      });
    },

    createANote: (e, rprops) => {
      e.preventDefault();
      rprops.history.push("/");

      let newNote = {
        id: rprops.match.id,
        name: e.target.name.value,

        modified: "",
        folderId: e.target.folders.value,
        content: e.target.content.value,
      };

      console.log(newNote);
      this.setState(
        {
          notes: [...this.state.notes, newNote],
        },
        () => {
          fetch("http://localhost:9090/notes", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newNote),
          }).then((res) => res.json());
        }
      );
    },
  };

  componentDidMount() {
    fetch("http://localhost:9090/folders")
      .then((res) => res.json())
      .then((folders) => this.setState({ folders }));

    fetch("http://localhost:9090/notes")
      .then((res) => res.json())
      .then((notes) => this.setState({ notes }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path="/" component={Header} />
          <div className="global">
            <Route path="/" component={Aside} />
            <Route exact path="/" component={Notes} />
            <Route path="/folder/:id" component={Notes} />
            <Route path="/note/:id" component={Note} />
            <Route path="/addAFolder" component={AddAFolder} />
            <Route path="/addANote" component={AddANote} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

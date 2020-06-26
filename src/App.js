import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import store from "./Folder/Folders";
import Notes from "./Notes/Notes";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//////////////
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { store };
  }

  deleteNote = (e, id) => {
    console.log(id);
  };

  render() {
    return (
      <div>
        {" "}
        <Route path="/" component={Header} />
        <div className="global">
          <Route path="/" render={() => <Aside folder={this.state.store} />} />
          <Route
            path="/notes/:id"
            render={(rprops) => (
              <Notes
                {...rprops}
                folder={this.state.store}
                deleteNote={this.deleteNote}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

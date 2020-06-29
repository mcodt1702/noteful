import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import store from "./Folder/Folders";
import Notes from "./Notes/Notes";
import Expand from "./Expand/Expand";
import addANote from "./AddANote/AddANote";

import AddAFolder from "./AddAFolder/AddAFolder";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//////////////
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { store };
  }

  createFolder = (e, index) => {
    e.preventDefault();

    let newFolder = { title: e.target.title.value, Id: 5 };
    console.log(newFolder);
    this.setState({
      store: [...this.state.store, newFolder],
    });
  };

  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className="global">
          <Route path="/" render={() => <Aside folder={this.state.store} />} />

          <Route
            path="/addAFolder"
            render={() => <AddAFolder createFolder={this.createFolder} />}
          />
        </div>
      </div>
    );
  }
}

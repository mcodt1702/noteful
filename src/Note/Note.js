import React from "react";
//import { Link } from "react-router-dom";
import "./Note.css";
import Context from ".././Context";

export default class Note extends React.Component {
  static contextType = Context;
  render() {
    const note = this.context.notes.find(
      (note) => note.id === this.props.match.params.id
    );
    return (
      <div className="note">
        <h2>{note.name}</h2>
        <p>{note.content}</p>
      </div>
    );
  }
}

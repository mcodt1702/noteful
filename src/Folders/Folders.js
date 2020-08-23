import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";
import Context from "../Context";
import PropTypes from "prop-types";

export default class Notes extends React.Component {
  static contextType = Context;
  render() {
    let { notes } = this.context;
    let id = this.props.match.params.id;

    const found = notes
      .filter((note) => note.folder_id === parseInt(id))
      .map((note) => (
        <li key={note.note_id}>
          <Link to={`/note/${note.note_id}`}>{note.name}</Link>
          <button onClick={this.context.deleteNote(note.note_id)}>
            Delete
          </button>
        </li>
      ));

    return (
      <div className="displayNotes">
        <ul>
          <h2>Notes</h2>
          {found}
          <Link to="/addANote">
            <li>Add a Note</li>
          </Link>
        </ul>

        <Link to="/">
          <h2>Back to Noteful</h2>
        </Link>
      </div>
    );
  }
}

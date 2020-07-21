import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";
import Context from ".././Context";
import PropTypes from "prop-types";

export default class Notes extends React.Component {
  static contextType = Context;
  render() {
    let { notes } = this.context;
    let { id } = this.props.match.params;

    const found = notes
      .filter((note) => (id !== undefined ? note.folderId === id : true))
      .map((nota) => (
        <li key={nota.id}>
          <Link to={`/note/${nota.id}`}>{nota.name}</Link>

          <button onClick={(e) => this.context.deleteNote(e, nota.id)}>
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

Notes.propTypes = {
  value: PropTypes.array,
};

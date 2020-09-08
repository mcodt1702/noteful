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
          <button
            onClick={() => {
              this.context.deleteNote(note.note_id);
            }}
          >
            Delete
          </button>
        </li>
      ));

    const folderName = this.context.folders[id - 1];
    console.log(id);
    console.log(folderName);
    return (
      <div className="displayNotes">
        <ul>
          <h2>Notes</h2>
          {found}
          <Link to="/addANote">
            <li>
              <button>Add a Note</button>
            </li>
          </Link>
        </ul>

        <Link id="backToNoteful" to="/">
          Back to Noteful
        </Link>
      </div>
    );
  }
}
Notes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }),
};

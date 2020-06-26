import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

export default function Notes(props) {
  console.log(props.folder.notes);

  let array = props.folder.notes;

  const clave = props.match.params.id;

  const found = array
    .filter((t) => t.folderId === props.match.params.id)
    .map((nota) => (
      <li>
        {nota.name}
        <button onClick={(e) => props.deleteNote(e, props.folder.notes.id)}>
          Delete
        </button>
      </li>
    ));

  console.log(found);

  return (
    <div className="displayNotes">
      <ul>
        <h2>Notes</h2>
        {found}
      </ul>
      <Link to="/">
        <h2>Back to Noteful</h2>
      </Link>
    </div>
  );
}

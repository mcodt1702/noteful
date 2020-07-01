import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

export default function Notes(props) {
  console.log(props.notes);

  let { notes } = props;
  let { id } = props.match.params;

  const found = notes
    .filter((note) => (id !== undefined ? note.folderId === id : true))
    .map((nota) => (
      <li key={nota.id}>
        <Link to={`/note/${nota.id}`}>{nota.name}</Link>

        <button onClick={(e) => props.deleteNote(e, nota.id)}>Delete</button>
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

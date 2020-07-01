import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

export default function Notes(props) {
  console.log(props.notes);

  let { notes } = props;
  let { id } = props.match.params;

<<<<<<< HEAD
  const clave = props.match.params.id;

  const found = array
    .filter((t) => t.folderId === props.match.params.id)
    .map((nota, index) => (
      <li key={nota}>
        {nota.name}
=======
  const found = notes
    .filter((note) => (id !== undefined ? note.folderId === id : true))
    .map((nota) => (
      <li key={nota.id}>
        <Link to={`/note/${nota.id}`}>{nota.name}</Link>

>>>>>>> navigation
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

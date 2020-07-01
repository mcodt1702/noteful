import React from "react";
//import { Link } from "react-router-dom";
import "./Note.css";

export default function Note(props) {
  const note = props.notes.find((note) => note.id === props.match.params.id);
  return (
    <div className="note">
      <h2>{note.name}</h2>
      <p>{note.content}</p>
    </div>
  );
}

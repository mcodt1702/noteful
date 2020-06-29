import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";

export default function Aside(props) {
  console.log(props.folder);
  return (
    <div className="navBar">
      <ul>
        <h2>Folders</h2>
        {props.folder.folders.map((file) => (
          <li key={file.id}>
            <Link to={`/notes/${file.id}`}>{file.name}</Link>
          </li>
        ))}
        <li>
          <Link to={"/addAFolder"}> Add a Folder</Link>
        </li>
      </ul>
    </div>
  );
}

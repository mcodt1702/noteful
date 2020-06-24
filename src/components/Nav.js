import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

const folders = [
  {
    id: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    name: "Important",
  },
  {
    id: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    name: "Super",
  },
  {
    id: "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    name: "Spangley",
  },
];

export default function Nav(props) {
  return (
    <aside className="folder-list">
      <ul>
        {folders.map((folder, i) => (
          <li key={folder.id}>
            <Link
              className={
                Number(props.match.params.folderId) === i ? "active" : ""
              }
              to={`/notes/${folder.id}`}
              // <Link to={`/poem/${poem.id}`}>{poem.title}</Link>
            >
              {folder.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

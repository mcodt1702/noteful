import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";
import Context from ".././Context";

export default class Aside extends React.Component {
  static contextType = Context;

  render() {
    const error = this.context.error ? (
      <div className="errorFetching">
        <p>There was an error getting you folders</p>
      </div>
    ) : (
      ""
    );

    return (
      <div className="navBar">
        <ul>
          <h2>Folders</h2>
          {error}
          {this.context.folders.map((file) => (
            <li key={file.folder_id}>
              <Link to={`/folder/${file.folder_id}`}>{file.name}</Link>
              <button
                className="delete"
                onClick={() => {
                  this.context.deleteFolder(file.folder_id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
          <li>
            <Link to={"/addAFolder"}> Add a Folder</Link>
          </li>
        </ul>
      </div>
    );
  }
}

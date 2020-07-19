import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";
import Context from ".././Context";
import PropTypes from "prop-types";
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
            <li key={file.id}>
              <Link to={`/folder/${file.id}`}>{file.name}</Link>
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

Aside.propTypes = {
  value: PropTypes.string.isRequired,
};

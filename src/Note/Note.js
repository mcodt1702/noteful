import React from "react";
import PropTypes from "prop-types";
import "./Note.css";
import Context from ".././Context";

export default class Note extends React.Component {
  static contextType = Context;

  render() {
    const pramsIdInt = parseInt(this.props.match.params.id);
    const note = this.context.notes.find(
      (note) => note.note_id === pramsIdInt
    ) || { name: "", content: "" };
    return (
      <div className="note">
        <h2>{note.name}</h2>
        <p>{note.content}</p>
        <div>
          {" "}
          <button onClick={() => this.props.history.goBack()}>
            {" "}
            Back to Folder
          </button>{" "}
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  match: PropTypes.object,
};

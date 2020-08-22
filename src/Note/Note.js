import React from "react";
import PropTypes from "prop-types";
import "./Note.css";
import Context from ".././Context";

export default class Note extends React.Component {
  static contextType = Context;

  render() {
    console.log(this.props.match.params.id);
    const note = this.context.notes.find(
      (note) => note.id === this.props.match.params.id
    ) || { name: "", content: "" };
    return (
      <div className="note">
        <h2>{note.name}</h2>
        <p>{note.content}</p>
      </div>
    );
  }
}

Note.propTypes = {
  match: PropTypes.object,
};

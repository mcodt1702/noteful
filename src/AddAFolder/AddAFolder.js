import React from "react";
import Context from ".././Context";
import PropTypes from "prop-types";

export default class AddAFolder extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="addFolderForm">
        <form
          onSubmit={(e) => this.context.createFolder(e, this.props.history)}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            aria-label="Folder Title"
          />
          <input
            type="submit"
            name="submit"
            value="Submit"
            aria-label="Submit New Folder"
          />
        </form>
      </div>
    );
  }
}

AddAFolder.propTypes = {
  value: PropTypes.string.isRequired,
};

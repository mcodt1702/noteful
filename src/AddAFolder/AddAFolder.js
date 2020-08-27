import React from "react";
import PropTypes from "prop-types";
import Context from ".././Context";
import ValidationError from "../ValidationError/ValidationError";

export default class AddAFolder extends React.Component {
  static contextType = Context;

  constructor() {
    super();

    this.state = {
      name: "",
      touched: false,
    };
  }

  nameUpdate(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 4) {
      return "You need at least 3 characters";
    }
  }

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
            value={this.state.name.value}
            onChange={(e) => this.nameUpdate(e.target.value)}
            required
          />
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
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
  history: PropTypes.object,
};

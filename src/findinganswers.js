import React from "react";
import Context from ".././Context";
import ValidationError from "../ValidationError/ValidationError";

export default class AddANote extends React.Component {
  static contextType = Context;
  constructor() {
    super();

    this.state = {
      name: {
        value: "",
        touched: false,
      },
      content: {
        value: "",
        touched: false,
      },
    };
  }

  nameUpdate(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  contentUpdate(content) {
    this.setState({ content: { value: content, touched: true } });
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 4) {
      return "You need at least 3 characters";
    }
  }

  validateContent() {
    const content = this.state.value.trim();
    if (content.length === 0) {
      return "You need to add content to your note";
    } else if (content.length < 3) {
      return "Please add at least one word to your content ";
    }
  }

  render() {
    const addNote = this.context.folders.map((folde) => (
      <option value={folde.id}> {folde.name} </option>
    ));

    return (
      <div className="addFolderForm">
        <form
          onSubmit={(e, id) => {
            this.context.createANote(e, this.props);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Title"
            aria-label="Folder Title"
            value={this.state.name.value}
            onChange={(e) => this.nameUpdate(e.target.value)}
          />
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
          <input
            type="text"
            name="content"
            placeholder="content"
            aria-label="add a note"
            value={this.state.content.value}
            onChange={(e) => this.contentUpdate(e.target.value)}
          />
          {this.state.content.touched && (
            <ValidationError message={this.validateName()} />
          )}

          <select name="folders">{addNote}</select>
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

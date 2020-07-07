import React from "react";
import Context from ".././Context";

export default class AddANote extends React.Component {
  static contextType = Context;

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
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            aria-label="add a note"
          />

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

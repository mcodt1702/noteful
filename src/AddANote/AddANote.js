import React from "react";

export default function AddANote(props) {
  const addNote = props.folders.map((folde) => (
    <option value={folde.id}> {folde.name} </option>
  ));

  return (
    <div className="addFolderForm">
      <form
        onSubmit={(e, id) => {
          props.createANote(e, id);
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

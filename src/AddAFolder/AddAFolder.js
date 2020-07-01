import React from "react";

export default function AddAFolder(props) {
  return (
    <div className="addFolderForm">
      <form onSubmit={(e) => props.createFolder(e, props.history)}>
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

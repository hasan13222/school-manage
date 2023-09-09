import React from "react";

const CommentEditForm = ({updateHandler, item, editedComment, setEditedComment, setCommentEditId, setEditMode}) => {
  return (
    <form
      className="editCommentForm"
      onSubmit={(e) => {
        e.preventDefault();
        updateHandler(item);
      }}
    >
      <input
        type="text"
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          setCommentEditId(null);
          setEditMode(false);
        }}
      >
        Cancel
      </button>
      <input type="submit" value="Save" />
    </form>
  );
};

export default CommentEditForm;

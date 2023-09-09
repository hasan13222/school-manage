import React from "react";

const CommentCreateForm = ({createHandler, comment, setComment}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createHandler();
      }}
    >
      <input
        placeholder="Add a Comment..."
        type="text"
        name="comment"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <input type="submit" value="Comment" />
    </form>
  );
};

export default CommentCreateForm;

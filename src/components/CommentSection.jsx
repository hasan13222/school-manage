import { useState } from "react";
import { images } from "../assets";

import {useGetAllCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation} from '../store/reducers/comment';

import {useGetDuration} from '../hooks/useGetDuration';
import CommentCreateForm from "./CommentCreateForm";
import CommentEditForm from "./CommentEditForm";
import CommentList from "./CommentList";

const CommentSection = () => {
  const {isError, isFetching: isLoading, currentData: comments, error} = useGetAllCommentsQuery();
  const [createComment] = useCreateCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const [editMode, setEditMode] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);
  const [commentEditId, setCommentEditId] = useState(null);  
  const [comment, setComment] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const [commentId, setCommentId] = useState(1);
  const proPics = [images.profile1, images.profile2, images.profile3];
  
  const getDuration = useGetDuration();

  const createHandler = () => {
    if (!comment) {
      return;
    }
    setCommentId((prev) => prev + 1);
    const newComment = {
      id: `post-${commentId}`,
      comment: comment,
      proPic: proPics[commentId % 2],
      time: Date.now(),
      likeCount: 0,
      disLikeCount: 0,
    };

    createComment(newComment);
    setComment('');
  };

  const updateHandler = (cmnt) => {
    if (!editedComment) {
      return;
    }
    const editedCmnt = {
      ...cmnt, 
      comment: editedComment
    }
    updateComment(editedCmnt);
    setEditMode(false);
    setCommentEditId(null);    
  };

  const updateLikeCount = (fullItem) => {
    const editedCmnt = {
      ...fullItem, 
      likeCount: Number(fullItem.likeCount) + 1 
    }
    updateComment(editedCmnt);
  }

  const updateDisLikeCount = (fullItem) => {
    const editedCmnt = {
      ...fullItem, 
      disLikeCount: Number(fullItem.disLikeCount) + 1 
    }
    updateComment(editedCmnt);
  }

  const removeHandler = (id) => {
    deleteComment(id);
  };


  return (
    <div className="fix-container single_post__comments d-flex gap-3">
      <div className="flex-7">
        <h3>Comments</h3>
        <CommentCreateForm 
          createHandler={createHandler}
          comment={comment}
          setComment={setComment}
        />
        <div className="comment_items">
          {isLoading && "Loading..."}
          {isError && error.message}
          {comments?.map((item) => (
            <div className="comment_item d-flex gap-1">
              <img src={item.proPic ? item.proPic : images.profile1} alt="" />
              {editMode && commentEditId === item._id ? (
                <CommentEditForm 
                  updateHandler={updateHandler}
                  item={item}
                  editedComment={editedComment}
                  setCommentEditId={setCommentEditId}
                  setEditedComment={setEditedComment}
                  setEditMode={setEditMode}
                />
              ) : (
                <CommentList 
                item={item}
                getDuration={getDuration}
                comments={comments}
                updateDisLikeCount={updateDisLikeCount}
                updateLikeCount={updateLikeCount}
                setCommentEditId={setCommentEditId}
                setCommentEdit={setCommentEdit}
                commentEditId={commentEditId}
                commentEdit={commentEdit}
                setEditMode={setEditMode}
                removeHandler={removeHandler}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-3"></div>
    </div>
  );
};

export default CommentSection;

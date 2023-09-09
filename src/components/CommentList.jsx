import React from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const CommentList = ({item, getDuration, comments, updateDisLikeCount, updateLikeCount, setCommentEdit, commentEdit, setCommentEditId, commentEditId, setEditMode, removeHandler}) => {
  return (
    <div className="dtls">
      <p className="author">
        <span>Ragib Hasan</span>{" "}
        <small>{item.time ? getDuration(item.time) : `few times ago`}</small>
      </p>
      <p className="comment">{comments && item.comment}</p>
      <div className="reaction">
        <span>{item.likeCount ? item.likeCount : ""}</span>

        <BiSolidLike
          style={item.likeCount ? { color: "#cf1818" } : ""}
          onClick={() => updateLikeCount(item)}
        />

        <BiSolidDislike
          style={item.disLikeCount ? { color: "#cf1818" } : ""}
          onClick={() => updateDisLikeCount(item)}
        />

        <span>{item.disLikeCount ? item.disLikeCount : ""}</span>

        <div
          className="edit"
          onClick={() => {
            setCommentEdit(!commentEdit);
            setCommentEditId(item.id);
          }}
        >
          <BsThreeDotsVertical />
          <ul
            className="options"
            style={
              commentEditId === item.id && commentEdit
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <li onClick={() => setEditMode(true)}>Edit</li>
            <li onClick={() => removeHandler(item.id)}>Delete</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentList;

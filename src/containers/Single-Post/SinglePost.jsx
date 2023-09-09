import React from "react";
import { useParams } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import "./SinglePost.css";

import {posts} from '../../constants/posts'
import CommentSection from "../../components/CommentSection";

const SinglePost = () => {
  const {postId} = useParams();
  const post = posts.find(post => post.id === postId);

  return (
    <div className="full-container single_post">
      <div className="fix-container single_post_section d-flex gap-3">
        <div className="single_post_section__main">
          <h2>{post.title}</h2>
          <div className="meta_info d-flex gap-1">
            <div className="date d-flex aic">
              <FaRegCalendar />
              <span>{post.Date}</span>
            </div>
            <div className="author d-flex aic">
              <BsPencilSquare />
              <span>{post.Author}</span>
            </div>
          </div>
          <div className="img_wrapper">
            <img src={post.thumbnail} alt="thumbnail" />
          </div>
          <div className="single_post_body">
            {post.description}
          </div>
        </div>
        <div className="single_post_section__sidebar">
          <h3>Related News</h3>
          {posts.filter(item => item.type === post.type).map(item => (
            <div className="single_post_section__sidebar__items d-flex aic gap-1">
            <img src={item.thumbnail} alt="thumbnail" />
            <div className="dtls">
              <h4>{item.title}</h4>
              <span>{item.Date}</span>
            </div>
          </div>
          ))}
          
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default SinglePost;

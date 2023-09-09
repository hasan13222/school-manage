import { useState } from "react";
import {Link} from 'react-router-dom'
import { FaRegCalendar } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import "./News.css";
import { posts } from "../../constants/posts";

const News = () => {
  const [startOfPosts, setStartOfPosts] = useState(0);
  const [endOfPosts, setEndOfPosts] = useState(3);

  const filteredPosts = posts.slice(startOfPosts, endOfPosts);

  const prevHandeler = () => {
    setStartOfPosts(startOfPosts - 3);
    setEndOfPosts(endOfPosts - 3);
  };
  const nextHandler = () => {
    setStartOfPosts(startOfPosts + 3);
    setEndOfPosts(endOfPosts + 3);
  };

  return (
    <div className="full-container news">
      <div className="fix-container news__section">
        <h2>News</h2>
        <div className="news__section__items d-flex gap-3">
          {filteredPosts.map((item) => (
            <div className="news__section__item">
              <img src={item.thumbnail} alt="news" />
              <div className="news_desc d-flex fxdc gap-1">
                <div className="meta_info d-flex gap-1">
                  <div className="date d-flex aic">
                    <FaRegCalendar />
                    <span>{item.Date}</span>
                  </div>
                  <div className="author d-flex aic">
                    <BsPencilSquare />
                    <span>{item.Author}</span>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/posts/${item.id}`}>
                <button>Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="post_nav d-flex spb">
         {startOfPosts > 0 ? <button onClick={prevHandeler}>Prev</button> : <span></span>}
         {endOfPosts < posts.length ? <button onClick={nextHandler}>Next</button> : <span></span>}
        </div>
      </div>
    </div>
  );
};

export default News;

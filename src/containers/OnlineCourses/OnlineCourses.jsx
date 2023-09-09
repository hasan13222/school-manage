import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from '../../components/Pagination';
import { BsPlayCircleFill, BsClockFill, BsFillStarFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { LuArrowUpDown } from "react-icons/lu";
import {
  setCategoryValue,
  setFreeChecked,
  setPaidChecked,
  showAll,
  setRatingStar,
  sortByDate,
  sortByPriceAsc,
  sortByPriceDsc,
  sortByRating,
  sortBySales
} from "../../store/reducers/shop";

import {
  useAddToCartMutation,
  useGetCartProductsQuery,
} from "../../store/reducers/cart";

// import { onlineCourses } from "../../constants/onlineCourses";
import "./OnlineCourses.css";
import '../../Pagination.scss';
import OnlineCourseSidebar from "../../components/OnlineCourseSidebar";

let PageSize = 3;

const OnlineCourses = () => {
  const dispatch = useDispatch();
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [sortPriceToggle, setSortPriceToggle] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [addToCart] = useAddToCartMutation();
  const { currentData: data } = useGetCartProductsQuery();
  const { dataToShow} = useSelector(
    (store) => store.onlineCourse
  );

  const onlineCourses = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataToShow.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataToShow]);

  const cartHandler = (idToFilter) => {
    const courseToBeAdded = onlineCourses.filter(
      (item) => item.id === idToFilter
    );
    const { id, owner, category, discountPrice, price, thumbnail, title } =
      courseToBeAdded[0];
    const newCartCourse = {
      id,
      title,
      owner,
      category,
      discountPrice,
      price,
      thumbnail,
      quantity: 1,
    };
    addToCart(newCartCourse);
  };

  const resetHandler = () => {
    dispatch(showAll());
    dispatch(setCategoryValue(""));
    dispatch(setFreeChecked(false));
    dispatch(setPaidChecked(false));
    dispatch(setRatingStar(""));
  };

  const sortPriceHandler = () => {
    setSortPriceToggle(!sortPriceToggle);
    sortPriceToggle ? dispatch(sortByPriceAsc()) : dispatch(sortByPriceDsc());
  }
  return (
    <div className="full-container oncrs">
      <div className="fix-container oncrs__section">
        <div className="oncrs__section__top d-flex spb">
          <div className="d-flex spb aic oncrs__section__top--left">
            <div
              onClick={() => setSidebarToggle(!sidebarToggle)}
              className="filter"
            >
              <FaXmark />
              <span>Filter & Refine</span>
            </div>
            <div onClick={resetHandler} className="reset">
              <GrPowerCycle />
              <span>Reset</span>
            </div>
          </div>
          <div className="oncrs__section__top__item oncrs__section__top--right">
            <div className="btns">
              <button onClick={() => dispatch(sortBySales())}>Best Seller</button>
              <button onClick={() => dispatch(sortByDate())}>Newest</button>
              <button onClick={() => dispatch(sortByRating())}>Best Rated</button>
              <button className="price_sort"
                onClick={sortPriceHandler}
              >
                Price
                <LuArrowUpDown />
              </button>
            </div>
          </div>
        </div>
        <div className="oncrs__section__body d-flex gap-2">
          {/* sidebar section */}
          {sidebarToggle ? <OnlineCourseSidebar /> : ""}

          {/* main section */}
          <div className="oncrs__section__body__main">
            {onlineCourses.length > 0 ? (
              onlineCourses.map((item) => (
                <>
                <div className="oncrs__section__body__main__item d-flex gap-1">
                  <div className="img_wrapper">
                    <img src={item.thumbnail} alt="course thumbnail" />
                  </div>
                  <div className="dtls">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="category">
                      <span className="title">Category:</span>
                      <span className="desc">{item.category}</span>
                    </div>
                    <div className="lesson">
                      <div className="item">
                        <BsPlayCircleFill />
                        <span>{item.lession} Lesson</span>
                      </div>
                      <div className="item">
                        <BsClockFill />
                        <span>{item.time} Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="cart">
                    <div className="rating">
                      {item.rating === "3" ? (
                        <>
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="blank" />
                          <BsFillStarFill className="blank" />
                        </>
                      ) : item.rating === "4" ? (
                        <>
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="blank" />
                        </>
                      ) : (
                        <>
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                          <BsFillStarFill className="fill" />
                        </>
                      )}

                      <span>({(Math.random() * 10).toFixed(0)} Rating)</span>
                    </div>
                    <div className="sales">
                      <span>{item.sales} sales</span>
                    </div>
                    <div className="price">
                      <span className="discount">
                        ${item.discountPrice.toFixed(2)}
                      </span>
                      <span className="reg">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="btn">
                      <button
                        className={
                          data?.find((course) => {
                            return course.id === item.id;
                          })
                            ? "clicked"
                            : ""
                        }
                        onClick={() => cartHandler(item.id)}
                      >
                        <FaShoppingCart />
                        {data?.find((course) => {
                          return course.id === item.id;
                        })
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
                </>
              ))
            ) : (
              <h2>No Result Found</h2>
            )}
          </div>
        </div>
        
        <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataToShow.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />
      </div>
    </div>
  );
};

export default OnlineCourses;

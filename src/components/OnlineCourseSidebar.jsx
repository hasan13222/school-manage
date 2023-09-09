import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LiaAngleDownSolid,
  LiaAngleRightSolid,
  LiaAngleUpSolid,
} from "react-icons/lia";
import { BsFillStarFill } from "react-icons/bs";
import {
  filterCategory,
  filterByKeyword,
  filterByPrice,
  filterByFree,
  filterByPaid,
  showAll,
  filterByRating,
  setCategoryValue,
  setFreeChecked,
  setPaidChecked, 
  setRatingStar
} from "../store/reducers/shop";
import { onlineCourses } from "../constants/onlineCourses";

const OnlineCourseSidebar = () => {
  const {categoryValue, freeChecked, paidChecked, ratingStar} = useSelector(store => store.onlineCourse)
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  // toggle state
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [searchToggle, setSearchToggle] = useState(true);
  const [priceToggle, setPriceToggle] = useState(true);
  const [paidToggle, setPaidToggle] = useState(true);
  const [ratingToggle, setRatingToggle] = useState(true);

  const priceFilterHandler = () => {
    if (minPrice === null || maxPrice === null) {
      alert("Please Enter a minimum and a maximum price");
    } else if (
      String(Number(minPrice)) !== minPrice ||
      String(Number(maxPrice)) !== maxPrice
    ) {
      alert("Please Enter Number instead of characters");
    } else if (
      Math.abs(minPrice) !== Number(minPrice) ||
      Math.abs(maxPrice) !== Number(maxPrice)
    ) {
      alert("Please Enter positive number");
    } else if (Number(minPrice) > Number(maxPrice)) {
      alert("maximum price must be greater than minimum price");
    }

    dispatch(
      filterByPrice({
        min: Number(minPrice),
        max: Number(maxPrice),
      })
    );

    setMaxPrice(null);
    setMinPrice(null);
  };

  const filterByRadioButton = () => {
    if(!categoryValue){
      dispatch(showAll());
    } else {
      switch (categoryValue) {
        case "Personal Development":      
        dispatch(filterCategory("Personal Development"));
        break;
        case "Lifestyle Course":          
        dispatch(filterCategory("Lifestyle Course"));
        break;
        case "Upgrade skill":          
        dispatch(filterCategory("Upgrade skill"));
        break;
        case "Business Marketing":          
        dispatch(filterCategory("Business Marketing"));
        break;
        case "Health & Fitness":          
        dispatch(filterCategory("Health & Fitness"));
        break;      
        case 3:          
        dispatch(filterCategory("Health & Fitness"));
        break;      
        case 4:          
        dispatch(filterCategory("Health & Fitness"));
        break;      
        case 5:          
        dispatch(filterCategory("Health & Fitness"));
        break;      
        default:
          dispatch(showAll());
      }
    }
  }

  const ratingHandler = () => {
    switch (ratingStar) {      
      case "3":          
      dispatch(filterByRating("3"));
      break;      
      case "4":          
      dispatch(filterByRating("4"));
      break;      
      case "5":          
      dispatch(filterByRating("5"));
      break;      
      default:
        dispatch(showAll());
    }
  }

  const filterByCheckbox = () => {
    if(freeChecked && !paidChecked){
      console.log(freeChecked);
      dispatch(filterByFree())
    } else if(paidChecked && !freeChecked ){
      console.log(paidChecked);
      dispatch(filterByPaid())
    } else{
      filterByRadioButton();
    }
  }
  const showAllHandler = () => {
    dispatch(showAll());
    dispatch(setCategoryValue(''));
    dispatch(setFreeChecked(false));
    dispatch(setPaidChecked(false));
    dispatch(setRatingStar(''));
 }
  useEffect(() => {
    filterByRadioButton()
  }, [categoryValue]);

  useEffect(() => {
    filterByCheckbox()
  }, [freeChecked, paidChecked]);

  useEffect(() => {
    ratingHandler()
  }, [ratingStar]);

  return (
    <div className="oncrs__section__body__sidebar">
      <div className="oncrs__section__body__sidebar__item oncrs__section__body__sidebar--category">
        <div className="oncrs__section__body__sidebar__item__top d-flex spb aic">
          <span>Category</span>
          {categoryToggle ? (
            <LiaAngleDownSolid
              onClick={() => setCategoryToggle(!categoryToggle)}
            />
          ) : (
            <LiaAngleUpSolid
              onClick={() => setCategoryToggle(!categoryToggle)}
            />
          )}
        </div>
        {categoryToggle ? (
          <form>
            <div className="oncrs__section__body__sidebar__item__body oncrs__section__body__sidebar--category__body">
              <div className="oncrs__section__body__sidebar--category__body__single d-flex aic spb">
                <div className="radio_btn">
                  <input
                    onChange={(e) => {
                      dispatch(setCategoryValue(e.target.value));
                    }}
                    value="Personal Development"
                    checked={categoryValue === "Personal Development"}
                    type="radio"
                    name="category"
                    id="pd"
                  />
                  <label for="pd">Personal Development</label>
                </div>
                <span>{onlineCourses.filter(item => item.category === "Personal Development").length}</span>
              </div>
              <div className="oncrs__section__body__sidebar--category__body__single d-flex aic spb">
                <div className="radio_btn">
                  <input
                    onChange={(e) => {
                      dispatch(setCategoryValue(e.target.value));
                    }}
                    value="Lifestyle Course"
                    checked={categoryValue === "Lifestyle Course"}
                    type="radio"
                    name="category"
                    id="lc"
                  />
                  <label for="lc">Lifestyle Course</label>
                </div>
                <span>{onlineCourses.filter(item => item.category === "Lifestyle Course").length}</span>
              </div>
              <div className="oncrs__section__body__sidebar--category__body__single d-flex aic spb">
                <div className="radio_btn">
                  <input
                    onChange={(e) => {
                      dispatch(setCategoryValue(e.target.value));
                    }}
                    value="Upgrade skill"
                    checked={categoryValue === "Upgrade skill"}
                    type="radio"
                    name="category"
                    id="ups"
                  />
                  <label for="ups">Upgrade skill</label>
                </div>
                <span>{onlineCourses.filter(item => item.category === "Upgrade skill").length}</span>
              </div>
              <div className="oncrs__section__body__sidebar--category__body__single d-flex aic spb">
                <div className="radio_btn">
                  <input
                    onChange={(e) => {
                      dispatch(setCategoryValue(e.target.value));
                    }}
                    value="Business Marketing"
                    checked={categoryValue === "Business Marketing"}
                    type="radio"
                    name="category"
                    id="bm"
                  />
                  <label for="bm">Business Marketing</label>
                </div>
                <span>{onlineCourses.filter(item => item.category === "Business Marketing").length}</span>
              </div>
              <div className="oncrs__section__body__sidebar--category__body__single d-flex aic spb">
                <div className="radio_btn">
                  <input
                    onChange={(e) => {
                      dispatch(setCategoryValue(e.target.value));
                    }}
                    value="Health & Fitness"
                    checked={categoryValue === "Health & Fitness"}
                    type="radio"
                    name="category"
                    id="hf"
                  />
                  <label for="hf">Health & Fitness</label>
                </div>
                <span>{onlineCourses.filter(item => item.category === "Health & Fitness").length}</span>
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="oncrs__section__body__sidebar__item oncrs__section__body__sidebar--search">
        <div className="oncrs__section__body__sidebar__item__top d-flex spb aic">
          <span>Search By Course</span>
          {searchToggle ? (
            <LiaAngleDownSolid onClick={() => setSearchToggle(!searchToggle)} />
          ) : (
            <LiaAngleUpSolid onClick={() => setSearchToggle(!searchToggle)} />
          )}
        </div>
        {searchToggle ? (
          <div className="oncrs__section__body__sidebar__item__body oncrs__section__body__sidebar--search__body">
            <div className="oncrs__section__body__sidebar--search__body__single d-flex aic spb">
              <div className="search_box">
                <input
                  onChange={(e) => setKeyWord(e.target.value)}
                  placeholder="Enter Keyword.."
                  type="search"
                  name="search"
                  value={keyword}
                />
              </div>
              <LiaAngleRightSolid
                onClick={() => {
                  dispatch(filterByKeyword(keyword));
                  setKeyWord("");
                }}
                style={{ width: "3rem", height: "2.8rem" }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="oncrs__section__body__sidebar__item oncrs__section__body__sidebar--range">
        <div className="oncrs__section__body__sidebar__item__top d-flex spb aic">
          <span>Price Range</span>
          {priceToggle ? (
            <LiaAngleDownSolid onClick={() => setPriceToggle(!priceToggle)} />
          ) : (
            <LiaAngleUpSolid onClick={() => setPriceToggle(!priceToggle)} />
          )}
        </div>
        {priceToggle ? (
          <div className="oncrs__section__body__sidebar__item__body oncrs__section__body__sidebar--range__body">
            <div className="oncrs__section__body__sidebar--range__body__single d-flex aic spb">
              <div className="range_box d-flex aic gap-1">
                <input
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="$"
                  type="text"
                  name="range"
                />
                <span>-</span>
                <input
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="$"
                  type="text"
                  name="range"
                />
              </div>
              <LiaAngleRightSolid
                onClick={priceFilterHandler}
                style={{ width: "3rem", height: "2.8rem" }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="oncrs__section__body__sidebar__item oncrs__section__body__sidebar--price">
        <div className="oncrs__section__body__sidebar__item__top d-flex spb aic">
          <span>Price</span>
          {paidToggle ? (
            <LiaAngleDownSolid onClick={() => setPaidToggle(!paidToggle)} />
          ) : (
            <LiaAngleUpSolid onClick={() => setPaidToggle(!paidToggle)} />
          )}
        </div>
        {paidToggle ? (
          <div className="oncrs__section__body__sidebar__item__body oncrs__section__body__sidebar--price__body">
            <div className="oncrs__section__body__sidebar--price__body__single d-flex aic spb">
              <div className="price_option_box d-flex aic gap-1">
                <input
                  onChange={(e) => {
                    dispatch(setFreeChecked(!freeChecked));
                  }}
                  type="checkbox"
                  name="price_option"
                  id="free"
                  value="free"
                  checked={freeChecked}
                />
                <label for="free">Free</label>
              </div>
              <span>{onlineCourses.filter(item => item.price === 0).length}</span>
            </div>
            <div className="oncrs__section__body__sidebar--price__body__single d-flex aic spb">
              <div className="price_option_box d-flex aic gap-1">
                <input
                  onChange={(e) => {
                    dispatch(setPaidChecked(!paidChecked));
                  }}
                  type="checkbox"
                  name="price_option"
                  id="paid"
                  value="paid"
                  checked={paidChecked}
                />
                <label for="paid">Paid</label>
              </div>
              <span>{onlineCourses.filter(item => item.price > 0).length}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="oncrs__section__body__sidebar__item oncrs__section__body__sidebar--rating">
        <div className="oncrs__section__body__sidebar__item__top d-flex spb aic">
          <span>Rating</span>
          {ratingToggle ? (
            <LiaAngleDownSolid onClick={() => setRatingToggle(!ratingToggle)} />
          ) : (
            <LiaAngleUpSolid onClick={() => setRatingToggle(!ratingToggle)} />
          )}
        </div>
        {ratingToggle ? (
          <div className="oncrs__section__body__sidebar__item__body oncrs__section__body__sidebar--rating__body">
            <div className="oncrs__section__body__sidebar--rating__body__single d-flex aic spb">
              <div className="radio_btn">
                <input
                  onChange={showAllHandler}
                  type="radio"
                  name="rating"
                  id="all"
                />
                <label for="all">Show All Courses</label>
              </div>
              <span>{onlineCourses.length}</span>
            </div>
            <div className="oncrs__section__body__sidebar--rating__body__single d-flex aic spb">
              <div className="radio_btn">
                <input
                  onChange={(e) => dispatch(setRatingStar(e.target.value))}
                  type="radio"
                  name="rating"
                  id="threeStar"
                  value="3"
                  checked={ratingStar === "3"}
                />
                <label for="threeStar">
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="blank" />
                  <BsFillStarFill className="blank" />
                </label>
              </div>
              <span>{onlineCourses.filter(item => item.rating === '3' ).length}</span>
            </div>
            <div className="oncrs__section__body__sidebar--rating__body__single d-flex aic spb">
              <div className="radio_btn">
                <input
                  onChange={(e) => dispatch(setRatingStar(e.target.value))}
                  type="radio"
                  name="rating"
                  id="fourStar"
                  value="4"
                  checked={ratingStar === "4"}
                />
                <label for="fourStar">
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="blank" />
                </label>
              </div>
              <span>{onlineCourses.filter(item => item.rating === '4' ).length}</span>
            </div>
            <div className="oncrs__section__body__sidebar--rating__body__single d-flex aic spb">
              <div className="radio_btn">
                <input
                  onChange={(e) => dispatch(setRatingStar(e.target.value))}
                  type="radio"
                  name="rating"
                  id="fiveStar"
                  value="5"
                  checked={ratingStar === "5"}
                />
                <label for="fiveStar">
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                  <BsFillStarFill className="fill" />
                </label>
              </div>
              <span>{onlineCourses.filter(item => item.rating === '5' ).length}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OnlineCourseSidebar;

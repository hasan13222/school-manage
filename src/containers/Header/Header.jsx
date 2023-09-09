import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks";
import MobileNavbar from "../../components/MobileNavbar";
import Navbar from "../../components/Navbar";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { images } from "../../assets";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useGetCartProductsQuery } from "../../store/reducers/cart";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { currentData: products } = useGetCartProductsQuery();
  const [toggle, setToggle] = useState(false);

  const [navbarTop, setNavbarTop] = useState(undefined);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    const navbarEl = document.querySelector(".navbar").getBoundingClientRect();
    setNavbarTop(navbarEl.top);
  }, []);

  useEffect(() => {
    if (!navbarTop) return;

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [navbarTop]);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  const isSticky = (e) => {
    const navbarEl = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    if (scrollTop >= navbarTop - 10) {
      navbarEl.classList.add("is-sticky");
    } else {
      navbarEl.classList.remove("is-sticky");
    }
  };

  return (
    <header onClick={() => setToggle(false)} className="header" id="top">
      {/* news section in header */}
      <div className="full-container header__section">
        <div className="fix-container d-flex news-slider">
          <div className="header__section--news d-flex">
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
          </div>
          <div className="header__section--news d-flex">
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
            <div className="header__section--news__item">
              <p>
                <span className="date">11 July 2023</span>
                <span className="text">World Population Day!!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="fix-container pos_rel">
          <div className="section_title">
            <span>Latest News</span>
          </div>
        </div>
      </div>
      {/* end of news section of header */}

      {/* header social section */}
      <div className="full-container header__section socialSection">
        <div className="fix-container header__section--social d-flex spb">
          <div className="mail d-flex aic gap-1">
            <FaEnvelope />
            <span>mch-school@mch-school.com</span>
          </div>
          <SocialLinks />
        </div>
      </div>
      {/* end of header social section */}

      {/* logo header section */}
      <div className="full-container logoSection">
        <div className="fix-container header__section--logo d-flex aic spb">
          <a href="/">
            <img src={images.logo} alt="logo" />
          </a>
          <div className="login-section d-flex aic gap-2">
            <div className="phone d-flex gap-1 aic">
              <FaPhone />
              <span>990258405155</span>
            </div>
            <div className="cart">
              <Link to={"/cart"}>
                <BsCart3 />
              </Link>
              {products?.length !== 0 && (
                <div className="numberOfCart">
                  <span>{products?.length}</span>
                </div>
              )}
            </div>
            {!isUserLoggedIn && (
              <div className="login">
                <button onClick={() => navigate("/signup")}>SignUp</button>
              </div>
            )}
            {!isUserLoggedIn && (
              <div className="login">
                <button onClick={() => navigate("/login")}>Login</button>
              </div>
            )}
            {isUserLoggedIn && (
              <div className="login">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
          <MobileNavbar toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      {/* end of logo header section */}

      {/* Navbar */}
      <div className="full-container header__section navbar">
        <div className="fix-container navbar__inner">
          <Navbar />
        </div>
      </div>
      {/* end of Navbar */}
    </header>
  );
};

export default Header;

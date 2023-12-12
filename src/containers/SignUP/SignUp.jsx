import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { images } from "../../assets";
import { posts } from "../../constants/posts";
import {app, database} from '../../firebaseConfig'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import "../Login/Login.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const auth = getAuth();
    const handleInputs = (e) => {
        let inputs = {[e.target.name]: e.target.value}

        setData({...data, ...inputs});
        
    }
    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          navigate('/login')
        })
        .catch((err) => {
          alert('Sign Up failed','<br>', err.message)
        });
    }
  return (
    <div className="full-container login lp">
      <div className="login__main">
        <div className="login__main__logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="login__main__section">
          <h6>User SignUp</h6>
          <div className="username">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="username_box"
            />
            <FaUserAlt />
          </div>
          <div className="username">
            <input
            required
              type="email"
              name="email"
              placeholder="email"
              className="username_box"
              onChange={(e) => handleInputs(e)}
            />
            <FaEnvelope />
          </div>
          <div className="password">
            <input
            required
              type="password"
              name="password"
              placeholder="password"
              className="password_box"
              onChange={(e) => handleInputs(e)}
            />
            <BiSolidLockAlt />
          </div>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
        <div className="login__main__forget">
          <Link to={"/login"}>Login</Link>
          <Link to={"#/"}>Home</Link>
        </div>
      </div>
      <div className="login__sidebar">
        <div className="login__sidebar__section">
          <h2>What's New In MCH School</h2>
          <div className="login__sidebar__section__news">
            {posts
              .filter((item, index) => index < 4)
              .map((item, index) => (
                <div className="login__sidebar__section__news__item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#/">Read More</a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

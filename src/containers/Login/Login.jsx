import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import {app, database} from '../../firebaseConfig'
import { images } from "../../assets";
import { posts } from "../../constants/posts";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import "./Login.css";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const handleInputs = (e) => {
    let inputs = {[e.target.name]: e.target.value}

        setData({...data, ...inputs});
  }
  const handleSingin = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          navigate('/')
        })
        .catch((err) => {
          alert(err.message)
        });
  }
  return (
    <div className="full-container login lp">
      <div className="login__main">
        <div className="login__main__logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="login__main__section">
          <h6>User Login</h6>
          <div className="username">
            <input
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
              type="password"
              name="password"
              placeholder="password"
              className="password_box"
              onChange={(e) => handleInputs(e)}
            />
            <BiSolidLockAlt />
          </div>
          <button onClick={handleSingin}>Sign In</button>
        </div>
        <div className="login__main__forget">
          <a href="#/">Forget Password</a>
          <a href="#/">Home</a>
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

export default Login;

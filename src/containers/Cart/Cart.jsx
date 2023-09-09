// import {useState} from "react";
// import { images } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  useGetCartProductsQuery,
  useRemoveFromProductsMutation,
  useUpdateCartMutation
} from "../../store/reducers/cart";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [removeCourse] = useRemoveFromProductsMutation();
  const [updateCourse] = useUpdateCartMutation();

  const {
    isError,
    isFetching,
    currentData: products,
    error,
  } = useGetCartProductsQuery();

  const increaseHandler = (course) => {
    const updatedCourse = {
      ...course,
      quantity: Number(course.quantity) + 1,
    }    
    updateCourse(updatedCourse);
  }

  const decreaseHandler = (course) => {    
    const updatedCourse = {
      ...course,
      quantity:Number(course.quantity) - 1,
    }    
    updateCourse(updatedCourse);
  }
  return (
    <div className="full-container cart">
      <div className="fix-container">
        <div className="cart__sect">
          {isFetching && <h3>Please Wait...</h3>}
          {isError && <h3>Sorry. {error.message}</h3>}
          {products?.length !== 0 ? (
            <>
              <div className="cart_course_items">
                <div className="cart__sect__main">
                  <div className="cart__sect__main__top">
                    <p>{products?.length} Courses in Cart</p>
                  </div>
                  {products?.map((product) => (
                    <div className="cart__sect__main__body">
                      <div className="cart__sect__main__body__title">
                        <img src={product.thumbnail} alt="product" />
                        <div className="product">
                          <div className="top">
                            <h2>{product.title}</h2>
                            <p>By {product.owner}</p>
                          </div>
                          <div className="bottom">
                            <p>Categroy: {product.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="cart__sect__main__body__price">
                        <div className="top">
                          <span>${product.discountPrice}</span>
                          <s className="discount">${product.price}</s>
                        </div>
                        <div className="bottom">
                          <div className="incr_dcr">
                            <AiOutlineMinus
                            className={product.quantity === 1 ? 'disable' : ''}
                              onClick={() => product.quantity > 1 ? decreaseHandler(product) : ''}
                            />
                            <span>{product.quantity}</span>
                            <AiOutlinePlus
                            onClick={() => increaseHandler(product)}
                            />
                          </div>
                          <div className="delete">
                            <RiDeleteBin5Line
                              onClick={() => removeCourse(product.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="cart__sect__main__bottom">
                    <Link to={"/online-course"}>
                      <button>Continue Shopping</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cart__sect__sidebar">
                <div className="cart__sect__sidebar__top">
                  <span>Cart Total</span>
                </div>
                <div className="cart__sect__sidebar__body">
                  <div className="total">
                    <span className="key">Subtotal</span>
                    <span className="value">
                      $
                      {products?.reduce(
                        (acc, product) => acc + (product.discountPrice*product.quantity),
                        0
                      )}
                    </span>
                  </div>
                  <div className="total">
                    <span className="key">Shipping Fee</span>
                    <span className="value">
                      ${(products?.length * 70).toFixed(2)}
                    </span>
                  </div>
                  <div className="total main_total">
                    <span className="key">Total</span>
                    <span className="value">
                      $
                      {products?.reduce(
                        (acc, product) => acc + (product.discountPrice*product.quantity),
                        0
                      ) + Number((products?.length * 70).toFixed(2))}
                    </span>
                  </div>
                  <button onClick={() => navigate('/payment')}>Proceed To Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2>Your Cart is Empty</h2>
              <div className="empty_cart_button">
                <Link to={"/online-course"}>
                  <button>Continue Shopping</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {BiSolidCreditCardFront} from 'react-icons/bi'
import "./Payment.css";
import {
  useGetCartProductsQuery,
  useRemoveFromProductsMutation
} from "../../store/reducers/cart";

const Payment = () => {
  const {
    currentData: products
  } = useGetCartProductsQuery();
  const [removeCourse] = useRemoveFromProductsMutation();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cardNumberInputRef = useRef();
  const cardExpiryInputRef = useRef();
  const cardCvcInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const address = addressInputRef.current.value;
    const cardNumber = cardNumberInputRef.current.value;
    const cardExpiry = cardExpiryInputRef.current.value;
    const cardCvc = cardCvcInputRef.current.value;
    if(email && address && cardNumber && cardExpiry && cardCvc) {
      if(cardNumber.length !== 16){
        console.log(cardNumber.length);
        alert("Please enter valid card number")
        return;
      }
      else if(cardCvc.length !== 3){
        alert("Please enter valid cvc number")
        return;
      } else{
        alert("Your Payment is Successfull")
        products?.map(item => {
          return removeCourse(item.id)
        })
        navigate('/online-course');
      }
    } else {
      alert("Please fill all the fields");
      return;
    }
  }
  return (
    <div className="payment">
      <div className="payment__card">
        <h2>Billing Details</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input ref={emailInputRef} className="email" type="email" placeholder="Email" />
          <label htmlFor="address">Address</label>
          <input ref={addressInputRef} className="address" type="address" placeholder="Address" />
          <div className="card_info_wrapper">
            <div className="card__number__wrapper">
              <label htmlFor="card_info">Card Information</label>
              <input
                ref={cardNumberInputRef}
                placeholder="Card Number"
                type="text"
                className="card__number"
              />
              <BiSolidCreditCardFront />
            </div>
            <div className="cardDate_cvcNum">
              <input ref={cardExpiryInputRef} type="text" placeholder="Expire Date" className="cardDate" />
              <input ref={cardCvcInputRef} type="text" placeholder="CVC" className="cvcNum" />
            </div>
          </div>
          <input type="submit" value="Pay" />
        </form>
      </div>
    </div>
  );
};

export default Payment;

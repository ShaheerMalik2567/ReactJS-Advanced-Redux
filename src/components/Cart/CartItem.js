import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartADD = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const cartRemove = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const { title, quantity, total, price, id } = props.item;
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x<span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartRemove}>-</button>
          <button onClick={cartADD}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

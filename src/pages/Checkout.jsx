import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import { closeCart } from "../redux/toggleCartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(closeCart());
  });
  const { items } = useSelector((store) => store.cart);

  if (items.length < 1) {
    Navigate("/");
  }
  console.log("item", items);
  const totalPrice = useMemo(() => {
    return items.reduce((total, currentVal) => {
      return total + parseInt(currentVal.data.price) * currentVal.data.amount;
    }, 0);
  }, [items]);

  return (
    <div className="flex flex-col mt-14 w-10/12 ml-auto mr-auto border shadow-2xl">
      <div className="flex flex-col items-center gap-3 ">
        {items.map((item) => {
          return <CheckoutCard item={item} key={item.data.id} />;
        })}
      </div>
      <div className="">
        <h1>Total: ₹{totalPrice} </h1>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import PreviewItem from "../PreviewItem/PreviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <PreviewItem
            key={product._id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></PreviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
            
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
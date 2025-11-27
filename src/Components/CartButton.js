import React from "react";

export default function CartButton({ count }) {
  return (
    <div className="cart-box">
      🛒 <span className="cart-count">{count}</span>
    </div>
  );
}

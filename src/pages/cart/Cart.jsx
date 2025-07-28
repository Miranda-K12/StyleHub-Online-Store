import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../../features/cart/cartSlice";
import styles from "./Cart.module.css";
import Button from "../../components/button/Button";
import CartImage from "../../assets/cart/basket.png";

import Payment from "../../components/payment/Payment";
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const handlePaymentSuccess = () => {
    dispatch(clearCart());
    setIsModalOpen(false);
  };
  const shippingFee = totalAmount > 100 ? 0 : 5;
  const finalTotal = totalAmount + shippingFee;
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartBox}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2 className={styles.cartHeader}>
              You have no items in your cart.
            </h2>
            <img src={CartImage} alt="basket icon" style={{ width: "100px" }} />
            <h3 className={styles.cartSubheader}>
              Discover thousands of items waiting for you at StyleHub.
            </h3>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </div>
        ) : (
          <div className={styles.BasketPage}>
            <h2 className={styles.cartHeader}>My basket</h2>
            <div className={styles.cartContent}>
              <h3 className={styles.cartSubheader}>
                Spend $100 and we’ll ship your order for FREE — don’t miss out!
              </h3>
              <div className={styles.cartList}>
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className={styles.selectedCard}
                  >
                    <div className={styles.imageSection}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: "100%", borderRadius: "5px" }}
                      />
                    </div>

                    <div className={styles.selectedCardText}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p>
                        <span>Size:</span> {item.selectedSize}
                      </p>
                      <p>
                        <span>Price: </span>${item.totalPrice.toFixed(2)}
                      </p>
                      <p>
                        <span>Quantity:</span> {item.quantity}
                      </p>
                      <button
                        style={{
                          backgroundColor: "#dc3545",
                          padding: "10px",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginTop: "8px",
                          width: "100%",
                        }}
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              id: item.id,
                              selectedSize: item.selectedSize,
                            })
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => dispatch(clearCart())}
                className={styles.cartCancelButton}
              >
                Clear Cart
              </button>
            </div>
            <div className={styles.cartInfo}>
              <h3 className={styles.cardText}>
                Total: <span>${totalAmount.toFixed(2)}</span>
              </h3>
              <p className={styles.cardText}>
                Shipping Fee: <span>${shippingFee.toFixed(2)}</span>
              </p>
              <h3
                className={styles.totalInfo}
                style={{
                  borderBottom: "1px solid #bbbbbb",
                  paddingBottom: "12px",
                }}
              >
                Final Total:
                <span className={styles.paymentInfo}>
                  ${finalTotal.toFixed(2)}
                </span>
              </h3>
              <p
                className={styles.cardText}
                style={{ textTransform: "italic" }}
              >
                {shippingFee === 0
                  ? "You've unlocked free shipping!"
                  : "Add more items worth $" +
                    (100 - totalAmount).toFixed(2) +
                    " for free shipping."}
              </p>
              <Button bg="#0d6efd" onClick={openModal}>
                Complete Order
              </Button>

              {isModalOpen && (
                <Payment
                  onClose={() => setIsModalOpen(false)}
                  onSuccess={handlePaymentSuccess}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

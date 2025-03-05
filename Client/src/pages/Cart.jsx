import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  useEffect(() => {
    const produceEvent = async () => {
      try {
        const requestBody = {
          eventType: "user",
          eventName: "page_viewed",
          userData: {
            userId: "bc7054b3-fb84-4050-8d82-231e56479c97",
            name: "Shyam",
            email: "Shyam.Soni123@exelaonline.com",
            device: "Desktop",
            mobile: 88832823890,
            location: "Vegas",
            clientId: "8613dbc0-8eff-40c3-9a64-b10975194604",
            browser: "Chrome",
            os: "Windows",
            gender: "Male",
          },
        };

        const response = await axios.post(
          "https://api.bengage.ai/eventproducer/api/v1/produceEvent",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Event sent successfully:", response.data);
      } catch (error) {
        console.error(
          "Error sending event:",
          error.response?.data || error.message
        );
      }
    };

    produceEvent(); // Call API when component mounts
  }, []); // Empty dependency array ensures it runs only once when the component loads
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const isCartEmpty = cartData.length === 0;

  const handleRemoveToCartEvent = async () => {
    console.log("handleRemoveToCart");
    try {
      const requestBody = {
        eventType: "system",
        eventName: "product_removed_from_cart",
        userData: {
          userId: "bc7054b3-fb84-4050-8d82-231e56479c97",
          name: "Shyam",
          email: "Shyam.Soni123@exelaonline.com",
          device: "Desktop",
          mobile: 88832823890,
          location: "Vegas",
          clientId: "8613dbc0-8eff-40c3-9a64-b10975194604",
          browser: "Chrome",
          os: "Windows",
          gender: "Male",
        },
      };

      const response = await axios.post(
        "https://api.bengage.ai/eventproducer/api/v1/produceEvent",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Event sent successfully:", response.data);
    } catch (error) {
      console.error(
        "Error sending event:",
        error.response?.data || error.message
      );
    }
  };

  const handleProceedToCheckout = async () => {
    try {
      const requestBody = {
        eventType: "system",
        eventName: "checkout_started",
        userData: {
          userId: "bc7054b3-fb84-4050-8d82-231e56479c97",
          name: "Shyam",
          email: "Shyam.Soni123@exelaonline.com",
          device: "Desktop",
          mobile: 88832823890,
          location: "Vegas",
          clientId: "8613dbc0-8eff-40c3-9a64-b10975194604",
          browser: "Chrome",
          os: "Windows",
          gender: "Male",
        },
      };

      const response = await axios.post(
        "https://api.bengage.ai/eventproducer/api/v1/produceEvent",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Event sent successfully:", response.data);
    } catch (error) {
      console.error(
        "Error sending event:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="grid py-4 text-gray-700 border-t border-b grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="Photo"
                />
                <div>
                  <p className="text-sm font-medium sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}&nbsp;
                      {productData.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                  handleRemoveToCartEvent();
                }}
                className="w-4 mr-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt="Remove"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => {
                navigate("/place-order");
                handleProceedToCheckout();
              }}
              className={`px-8 py-3 my-8 text-sm text-white bg-black active:bg-gray-700 ${
                isCartEmpty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isCartEmpty}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

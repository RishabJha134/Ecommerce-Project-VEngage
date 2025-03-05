import React, { useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  async function handleProductClick() {
    console.log("ProductClick");
    const produceEvent = async () => {
      try {
        const requestBody = {
          eventType: "system",
          eventName: "product_viewed",
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
  }

  return (
    <Link
      onClick={handleProductClick}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
          alt="Product"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}&nbsp;
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </Link>
  );
};

export default ProductItem;

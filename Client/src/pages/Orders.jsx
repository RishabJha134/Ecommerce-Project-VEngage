import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
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

  const { products, currency } = useContext(ShopContext);

  const handleTrackOrder = async () => {
    try {
      const requestBody = {
        eventType: "system",
        eventName: "checkout_address_info_submitted",
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
    <div className="pt-16 border-t">
      <div className="text-2xl">
        <Title text1={"YOUR"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="Photo" />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}&nbsp;
                    {item.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>Quantity:&nbsp;1</p>
                  <p>Size:&nbsp;M</p>
                </div>
                <p className="mt-2">
                  Date:&nbsp;<span className="text-gray-400">25 JUL 2024</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                <p className="text-sm md:text-base">Ready for Shipping</p>
              </div>
              <button
                onClick={handleTrackOrder}
                className="px-4 py-2 text-sm font-medium border rounded-sm"
              >
                TRACK ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

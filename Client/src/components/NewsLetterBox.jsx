import React from "react";
import axios from "axios";

const NewsLetterBox = () => {
  async function handleSubscribeClick() {
    console.log("Subscribe Event Call");
    const produceEvent = async () => {
      try {
        const requestBody = {
          eventType: "user",
          eventName: "subcribe_event",
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-10 text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Unlock 20% Off | Subscribe Today!
      </p>
      <p className="mt-3 text-gray-400">
        Don't miss out—unlock your savings now by subscribing below!
      </p>
      <form
        onClick={onSubmitHandler}
        className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2"
      >
        <input
          className="w-full outline-none sm:flex-1"
          type="email"
          placeholder="hello@gmail.com"
          required
        />
        <button
          onClick={handleSubscribeClick}
          type="submit"
          className="px-10 py-4 text-xs text-white bg-black"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

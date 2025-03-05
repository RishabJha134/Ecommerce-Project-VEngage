import React from "react";
import axios from "axios";

const NewsLetterBox = () => {
  async function handleSubscribeClick() {
    console.log("Subscribe Event Call");
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      console.log("User Agent:", userAgent);
    
      if (userAgent.includes("Edg")) return "Edge"; // ✅ Check Edge first
      if (userAgent.includes("Chrome")) return "Chrome";
      if (userAgent.includes("Firefox")) return "Firefox";
      if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
      return "Unknown Browser";
    };
    

    const detectOS = () => {
      const platform = navigator.platform.toLowerCase();
      console.log("Platform:", platform);

      if (platform.includes("win")) return "Windows";
      if (platform.includes("mac")) return "MacOS";
      if (platform.includes("linux")) return "Linux";
      if (/android/i.test(navigator.userAgent)) return "Android";
      if (/iphone|ipad|ipod/i.test(navigator.userAgent)) return "iOS";
      return "Unknown OS";
    };

    

    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const screenWidth = window.innerWidth;
      console.log("Screen Width:", screenWidth);

      if (/mobile|android|iphone|ipad|ipod/i.test(userAgent)) {
        return "Mobile";
      } else if (
        /tablet|ipad/i.test(userAgent) ||
        (screenWidth > 600 && screenWidth < 1024)
      ) {
        return "Tablet";
      } else {
        return "Desktop";
      }
    };

    const produceEvent = async () => {
      try {
        console.log("Detecting Browser...");
        const browser = detectBrowser();
        console.log("Browser Detected:", browser);

        console.log("Detecting OS...");
        const os = detectOS();
        console.log("OS Detected:", os);

        console.log("Detecting Device...");
        const device = detectDevice();
        console.log("Device Detected:", device);

     

        const requestBody = {
          eventType: "user",
          eventName: "subcribe_event",
          userData: {
            userId: "ad816505-e79e-42a9-947a-12f28b0d06c5",
            name: "Siddhart Malhotra",
            email: "Siddhart.Malhotra1234@exelaonline.com",
            device: device, // This can be modified to detect dynamically if needed
            mobile: 88832823890,
            location: "delhi,India", // Dynamic Location
            clientId: "8613dbc0-8eff-40c3-9a64-b10975194604",
            browser: browser, // Dynamic Browser
            os: os, // Dynamic OS
            gender: "Male", // You need to fetch this manually
          },
        };

        console.log("Final Request Body:", requestBody);

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

import React, { useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  // useEffect(() => {
  //   const produceEvent = async () => {
  //     try {
  //       const requestBody = {
  //         eventType: "system",
  //         eventName: "Page Viewed",
  //         userData: {
  //           userId: localStorage.getItem("powerpush_user_id"): "",
  //           name: "Shyam",
  //           email: "Shyam.Soni123@exelaonline.com",
  //           device: "Desktop",
  //           mobile: 88832823890,
  //           location: "Vegas",
  //           clientId: "8613dbc0-8eff-40c3-9a64-b10975194604",
  //           browser: "Chrome",
  //           os: "Windows",
  //           gender: "Male",
  //         },
  //       };

  //       const response = await axios.post(
  //         "https://api.bengage.ai/eventproducer/api/v1/produceEvent",
  //         requestBody,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log("Event sent successfully:", response.data);
  //     } catch (error) {
  //       console.error(
  //         "Error sending event:",
  //         error.response?.data || error.message
  //       );
  //     }
  //   };

  //   produceEvent(); // Call API when component mounts
  // }, []); // Empty dependency array ensures it runs only once when the component loads

  useEffect(() => {
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
          eventType: "system",
          eventName: "Page Viewed",
          userData: {
            userId: localStorage.getItem("powerpush_user_id"),
            clientId:"41AB81A4-042b-48ED-9d68-03fa53351766",
            category: "event",
            properties: {
              abc: "xyz"
            },
            eventProperty: "CT App Version",
            eventPropertyValue: "12.13.6"
          },
        };

        console.log("Final Request Body:", requestBody);

        const response = await axios.post(
          "https://dev-api.powerpush.ai/eventproducer/api/v1/produceEvent",
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
  }, []);

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;

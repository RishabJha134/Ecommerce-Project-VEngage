import React, { useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
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
  }, []); // Empty dependency array ensures it runs only once when the component loads
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Photo"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Trendify 354 Fashion Lane <br />
            Los Angeles, SC 45678, USA
          </p>
          <p className="text-gray-500">
            Tel: (+11)-558-669-447 <br />
            Email: contact.trendify@info.com
          </p>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Join us at Trendify! Explore job openings and help shape the future
            of fashion. <br />
            Explore our current job openings and discover how you can contribute
            to our mission of setting trends and creating style.
          </p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-gray-800 hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;

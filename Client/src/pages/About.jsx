import React, { useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
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
          eventName: "page_viewed",
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
  }, []); // Empty dependency array ensures it runs only once when the component loads

  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Photo"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Welcome to Trendify, where style meets quality. Our mission is to
            bring you the latest fashion trends and must-have items, all curated
            with an eye for quality and design. We believe that everyone
            deserves to express themselves through fashion, and we're here to
            make that easier and more enjoyable. Our collections are carefully
            selected to offer you a range of options that cater to every taste
            and occasion.
          </p>
          <p>
            At Trendify, we prioritize your satisfaction. From the moment you
            browse our site to the day your order arrives, we are dedicated to
            providing a seamless shopping experience. Our team is always on the
            lookout for the latest trends, ensuring that you have access to the
            freshest styles as soon as they hit the runway. Thank you for
            choosing Trendify. We’re excited to be a part of your style journey.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Trendify, our mission is to empower you to express your unique
            style with high-quality, on-trend fashion. We strive to make fashion
            accessible to all, offering diverse products that inspire
            confidence.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Trendify, our vision is to be a global fashion leader, known for
            cutting-edge style and quality. We aim to inspire confidence and
            creativity, making Trendify the go-to choice for individual
            expression.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Trendify, quality comes first. Every product is carefully chosen
            and inspected to meet our high standards. Shop with confidence,
            knowing we ensure excellence in every detail.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience</b>
          <p className="text-gray-600">
            Trendify ensures a smooth shopping experience with easy browsing,
            fast shipping, simple returns, and multiple payment options. Your
            comfort and satisfaction are our priorities.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Trendify, exceptional service is our promise. Our dedicated
            support team is here to assist you with any questions or concerns,
            ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

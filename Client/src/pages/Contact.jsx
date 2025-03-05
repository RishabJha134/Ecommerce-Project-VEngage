import React, { useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  useEffect(() => {
    const produceEvent = async () => {
      try {
        const requestBody = {
          eventType: "system",
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  const handleSignInClick = async () => {
    navigate("/");
    console.log("handleSignInClick");
    try {
      const requestBody = {
        eventType: "user",
        eventName: "user login",
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
  const handleSignUpClick = async () => {
    console.log("Event sent successfully: handleSignUpClick");
    try {
      const requestBody = {
        eventType: "user",
        eventName: "user registered",
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
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="John Doe"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="hello@gmail.com"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create a new account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button
        onClick={
          currentState === "Login" ? handleSignInClick : handleSignUpClick
        }
        className="px-8 py-2 mt-4 font-light text-white bg-black"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;

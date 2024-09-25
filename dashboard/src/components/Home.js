import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Logout } from "./Logout";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);  // Loading state

  const auth = async () => {
    try {
      const { data } = await axios.post(
        "https://trade-one.onrender.com/",
        {},
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.error("Authentication failed:", error);
      return { status: false };  // Handle error scenario
    }
  };

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { status, user } = await auth(); // Await the auth function properly
        setUsername(user);

        if (status) {
          toast(`Hello, ${user}`, {
            position: "top-right",
          });
        } else {
          Logout(navigate, removeCookie);  // If auth fails, log the user out
        }
      } catch (error) {
        console.error("Error during verification:", error);
      } finally {
        setLoading(false);  // Stop loading once auth is complete
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  if (loading) {
    return <div>Loading...</div>;  // Display loading message or spinner
  }

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;

import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      setTimeout(async() => {
        const { data } = await axios.post(
          "https://trade-one.onrender.com",
          {},
          { withCredentials: true }
        );
      }, 5000);
      const { status, user } = data;
      setUsername(user);
      
       if (status) {
        toast(`Hello , ${user}`, {
          position: "top-right",
        });
      } else {

        Logout(navigate, removeCookie);
      }
    };
  
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
 

  return (
    <>
      <TopBar username={username}/>
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;

import { useCookies } from "react-cookie";
export const Logout = (navigate, removeCookie) => {

    removeCookie("token");
    navigate("/login");
  };


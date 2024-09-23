export const Logout = (navigate, removeCookie) => {

    removeCookie("token");
    navigate("/login");
  };


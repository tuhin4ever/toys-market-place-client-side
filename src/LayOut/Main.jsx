import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleScroll);

    return () => {
      window.removeEventListener("beforeunload", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-88px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

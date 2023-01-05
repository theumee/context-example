import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./utils";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

const Header = () => {
  const val = useContext(AuthContext);
  return <div style={{ color: "red" }}>I am header {val}</div>;
};

const Home = () => {
  return (
    <div style={{ color: "blue" }}>
      <Header />I am Home
    </div>
  );
};

export default CustomRoutes;

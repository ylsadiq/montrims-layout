import React from "react";
// import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Upload from "../components/Upload/Upload";
import { MyContextProvider } from "../customHooks/useData";
// import DataView from "./DataView";

const Main = () => {
  return (
    <MyContextProvider>
      <Navbar />
      <Upload />
    </MyContextProvider>
  );
};

export default Main;

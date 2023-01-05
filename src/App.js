import "./styles.css";
import CutomRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { AuthContext } from "./utils";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={"dfa"}>
          <CutomRoutes />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

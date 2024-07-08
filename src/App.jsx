import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-santoshi">
      {/* <Navbar /> */}
      <Landing />
    </div>
  );
}

export default App;

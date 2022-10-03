import React, { useState } from "react";
import "./App.css";
import Breakfast from "./components/Breakfast";
import Button from "./components/Button";
import Dinner from "./components/Dinner";
import Lunch from "./components/Lunch";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [value, setValue] = useState("Breakfast");

  return (
    <>
      <Header />
      {value === "Breakfast" && <Breakfast value={value} />}
      {value === "Lunch" && <Lunch />}
      {value === "Dinner" && <Dinner />}
      <Button setValue={setValue} />
      <Footer />
    </>
  );
}

export default App;

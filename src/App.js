import "./css/style.css";
import React from "react";
import TopBar from "./Components/TopBar";
import Banner from "./Components/Banner";
import Contents from "./Components/Contents";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar/>
        <Banner/>
        <Contents/>
      <Footer/>
    </div>
  );
}

export default App;

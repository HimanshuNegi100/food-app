import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

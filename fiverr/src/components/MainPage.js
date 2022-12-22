import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-green-900 h-screen w-full text-white'>
          <div className="h-20 shadow-md ">
            <Navbar />
          </div>
          <Hero />
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;

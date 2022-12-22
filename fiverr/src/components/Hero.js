import React from "react";
import { PopularData } from "../data/PopularData";
import heroImage from "../asserts/heroPic4.png";

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className="relative w-full h-screen px-10 mt-10 grid grid-rows-2 gap-10 md:mt-0 md:grid-cols-3 md:w-4/5 md:mx-auto md:pt-20">
          <div className=" capitalize space-y-5 md:col-span-2 md:flex md:flex-col md:justify-center">
            <div className="text-2xl md:text-5xl">
              <p>find the perfect freelance</p>
              <p>services for your business</p>
            </div>

            {/* form area */}
            <form>
              <input className="px-16 py-1 rounded-l-lg md:px-40 md:py-2" />
              <button className="px-2 py-1 rounded-r-lg bg-green-500 md:px-3 md:py-2">
                search
              </button>
            </form>

            {/* popular data area */}
            <div className="flex space-x-4 ">
              {PopularData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=" bg-green-700 shadow-2xl md:text-2xl md:px-2" >
                      <div className='text-sm'>{item.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* image area */}
          <div className="centered -mt-64 md:absolute md:top-30 md:right-0 md:mt-0">
          <img src={heroImage} alt="image" className="heroImg" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;

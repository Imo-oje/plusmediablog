import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-screen relative top-20 md:top-36 flex flex-col items-center justify-center">
        <div className="flex justify-between items-center flex-wrap gap-2 w-full md:flex-nowrap relative p-4">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <h1 className="capitalize font-bold text-6xl md:text-6xl">
              untitled blog
            </h1>
            <div className="flex gap-2 w-full md:justify-between md:max-w-[600px] flex-wrap md:flex-nowrap">
              <input
                type="email"
                placeholder="Enter your Email"
                className=" h-10 rounded-lg p-2 font-bold md:w-full border border-black"
              />
              <button className="h-10 bg-black text-white px-2 rounded-lg font-bold ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-left md:w-[400px]">
            <p className="fontbold text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              animi ratione voluptatem iste aliquid?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

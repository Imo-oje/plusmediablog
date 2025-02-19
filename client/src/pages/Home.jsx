import React from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/post-card";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="p-2 w-screen relative top-20 md:top-36 flex flex-col items-center justify-center">
        <div className="flex justify-between items-center flex-wrap gap-2 w-full md:flex-nowrap relative">
          <div className="flex flex-col w-full md:w-1/2 gap-6">
            <h1 className="capitalize font-bold text-5xl md:text-8xl">
              Plusmedia blog
            </h1>
            <div className="text-left md:w-[400px] md:hidden -mt-4">
              <p className="fontbold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                animi ratione voluptatem iste aliquid?
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full md:justify-between md:max-w-[600px] md:flex-nowrap">
              <input
                type="email"
                placeholder="Enter your email"
                className=" h-14 rounded-full p-4 text-sm w-full border border-black"
              />
              <button className="h-14 bg-black text-white px-2 rounded-full font-bold ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-left md:w-[400px] hidden md:block">
            <p className="fontbold text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              animi ratione voluptatem iste aliquid?
            </p>
          </div>
        </div>

        {/* POST CARDS */}
        <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </main>
    </>
  );
};

export default Home;

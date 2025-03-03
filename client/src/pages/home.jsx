import React from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/post-card";
import { Link } from "react-router-dom";
import featuredImage from "../assets/img/test-featured-image.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <section className="my-10 lg:grid lg:gap-6 grid-cols-10 block w-full h-full">
          <div className="container mx-auto px-[24px] lg:pr-0 col-span-6 max-w-fit relative">
            <picture className="relative block">
              <img
                src={featuredImage}
                alt="Featured image"
                className="w-full h-full object-cover rounded-2xl"
                decoding="async"
                fetchPriority="high"
                srcSet={featuredImage}
                sizes="(max-width:1248px), 100vw, 1248px"
              />
              {/* Image Overlay Link */}
              <Link
                to="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="!absolute inset-0 z-10 block w-full h-full"
              ></Link>
            </picture>
          </div>

          <hr className="mx-auto w-4/5 my-6 lg:hidden" />

          <div className="lg:col-span-4 lg:pl-0 container mx-auto px-[24px] max-w-fit relative">
            <div className="text-justify">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </section>
        <hr className="mx-auto w-4/5 my-6" />
      </main>
    </>
  );
};

export default Home;

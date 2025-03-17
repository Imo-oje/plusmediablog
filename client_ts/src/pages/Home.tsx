import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <section className="my-10 lg:grid lg:gap-6 grid-cols-10 block w-full h-full">
          <div className="container mx-auto lg:pr-0 col-span-6 max-w-fit relative flex flex-col gap-5 px-[24px] lg:px-0">
            <picture className="relative block pl-[24px]">
              <img
                src="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured image"
                className="w-full h-full object-cover rounded-2xl"
                decoding="async"
                fetchPriority="high"
                srcSet="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sizes="(max-width:1248px), 100vw, 1248px"
              />
              {/* Image Overlay */}
              <Link
                to="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="!absolute inset-0 z-10 block w-full h-full group"
              >
                <div className="flex justify-between items-center p-6 mx-auto opacity-70">
                  <div className="hidden md:flex items-center gap-6 ">
                    <Button>Business</Button>
                    <Button>News</Button>
                  </div>
                  <div>
                    <Button className="hidden group-hover:block">
                      6 Min Read
                    </Button>
                  </div>
                </div>
              </Link>
            </picture>
            <div className="p-4 flex flex-col gap-2 pl-[24px]">
              <Link to="*" className="text-lg font-bold">
                Ethan Caldwell on September 29, 2024
              </Link>
              <Link to="*">
                <h1 className="text-3xl font-bold">
                  How Tech Shapes the Future of Work in 2024
                </h1>
              </Link>
              <p className="text-lg font-light leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                suscipit voluptate modi explicabo perferendis error hic, dicta
                dolorem? Magnam, error quis. Placeat, quas. At sequi maiores
                maxime ducimus aperiam nihil?
              </p>
            </div>
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

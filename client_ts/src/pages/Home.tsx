import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  type Category = {
    name: string;
    categoryId: string;
  };

  type CategoriesResponse = Category[];
  const navigate = useNavigate();

  const { isPending, data: categories } = useQuery<CategoriesResponse>({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async (): Promise<CategoriesResponse> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/category/get-categories`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.json();
    },
  });

  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <section className="my-10 md:my-1 px-1 md:px-[24px] lg:grid lg:gap-6 grid-cols-10 block w-full h-full">
          <div className="w-fit px-1 lg:p-0 col-span-6 flex flex-col justify-between rounded-2xl gap-6">
            <picture className="relative block">
              <img
                src="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured image"
                className="object-cover w-full rounded-2xl"
                decoding="async"
                fetchPriority="high"
                srcSet="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sizes="(max-width:1248px), 100vw, 1248px"
              />
              {/* Image Overlay */}
              <Link
                to="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="!absolute top-0 z-10 h-full block w-full group"
              >
                <div className="flex justify-between items-center p-6 mx-auto opacity-70">
                  <div className="hidden md:flex items-center gap-4">
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
            <div className="pt-0 relative inset-0 rounded-b-2xl flex flex-col lg:px-8 lg:pt-0 gap-2">
              <Link to="*" className="text-lg font-bold">
                Ethan Caldwell on September 29, 2024
              </Link>
              <Link to="*">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  How Tech Shapes the Future of Work in 2024
                </h1>
              </Link>
              <p className="text-lg font-light leading-6 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                suscipit voluptate modi explicabo perferendis error hic, dicta
                dolorem?...
              </p>
            </div>
          </div>

          <hr className="mx-auto w-4/5 my-6 lg:hidden" />

          <div className="lg:col-span-4 lg:pl-0 container mx-auto max-w-fit relative p-1 lg:p-0">
            <div className="text-justify h-full flex flex-col lg:justify-between lg:gap-6">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </section>
        <hr className="mx-auto w-4/5 hidden md:block" />
        <section className="md:my-1 md:px-[24px] w-full h-full">
          <h2 className="font-mono uppercase font-bold text-center p-2">
            Explore Trending Topics
          </h2>
          <div className="flex items-center flex-wrap w-3/5 mx-auto justify-center gap-3">
            {!categories?.length ? (
              <div className="capitalize">No categories found</div>
            ) : isPending ? (
              <p>loading...</p>
            ) : (
              categories.map((category) => {
                return (
                  <Badge
                    key={category.categoryId}
                    onClick={() => navigate(`/category/${category.name}`)}
                    className="py-2 px-6 cursor-pointer capitalize rounded-full transition duration-300 ease-in-out hover:bg-[#333] motion-reduce:transition-none motion-reduce:hover:transform-none"
                  >
                    {category.name}
                  </Badge>
                );
              })
            )}
          </div>
          <div className="text-justify h-full flex flex-col lg:justify-between lg:gap-6 pt-12 px-1">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

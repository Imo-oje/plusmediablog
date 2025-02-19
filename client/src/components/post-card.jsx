import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="max-w-[400px] flex flex-col gap-2">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          alt=""
        />
        <div className="text-white font-bold absolute rounded-t-sm margin-auto bg-slate-400 opacity-90 h-1/5 bottom-0 w-full flex justify-between items-start p-2">
          <div className="flex flex-col">
            <h3 className="leading-6 text-lg">Author</h3>
            <span className="text-sm">Date</span>
          </div>
          <div className="text-sm leading-6">category</div>
        </div>
      </div>
      <div>
        <Link className="text-[1.3rem] capitalize hover:underline font-semibold w-full inline-flex">
          something huge comming
        </Link>
        <div className="w-full">
          <p className="overflow-ellipsis overflow-hidden text-sm mt-1 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            vitae molestias blanditiis accusamus facere soluta.
          </p>
        </div>
      </div>
      <Link className="flex items-center  gap-1 text-sm font-semibold cursor-pointer mt-2">
        Read Post
        <span>
          <ArrowUpRight size={18} />
        </span>
      </Link>
    </div>
  );
};

export default PostCard;

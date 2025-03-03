import React from "react";
import { Link } from "react-router-dom";
import featuredImage from "../assets/img/test-featured-image.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostCard = () => {
  return (
    <>
      <Card className="shadow-none rounded-none flex flex-col-reverse sm:flex-row border-none lg:items-start lg:mb-6">
        <div className="w-full sm:mr-4">
          <CardHeader className="lg:pt-0 py-3 px-0">
            <CardTitle>
              <Link>
                <h2 className="text-[21px] font-bold md:leading-6 capitalize">
                  The Future of Work: Tech and Remote Trends
                </h2>
              </Link>
            </CardTitle>
            <CardDescription>
              Find out why 2024 is predicted to be a pivotal year for sports…
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 lg:text-[12px]">
            <Link>Ethan Caldwell on September 29, 2024</Link>
          </CardContent>
        </div>
        <picture className="relative block">
          <img
            src={featuredImage}
            alt="Featured image"
            className="h-full object-contain rounded-2xl sm:w-[300px] lg:w-[500px]"
            decoding="async"
            fetchPriority="high"
            srcSet={featuredImage}
          />
          {/* Image Overlay Link */}
          <Link
            to="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="!absolute inset-0 z-10 w-full h-full group flex items-center rounded-2xl justify-center group"
          >
            <Button className="hidden group-hover:block group-hover:opacity-70 z-10">
              6 Min Read
            </Button>
          </Link>
        </picture>
      </Card>
      <hr className="mx-auto w-4/5 my-6 lg:hidden" />
    </>
  );
};

export default PostCard;

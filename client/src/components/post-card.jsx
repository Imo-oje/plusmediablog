import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostCard = () => {
  return (
    <Card className="shadow-none border-none rounded-none">
      <CardHeader>
        <CardTitle>
          <h2 className="text-[21px] font-bold leading-6 capitalize">
            The Future of Work: Tech and Remote Trends
          </h2>
        </CardTitle>
        <CardDescription>
          Find out why 2024 is predicted to be a pivotal year for sports…
        </CardDescription>
      </CardHeader>
      <CardContent className="-mt-3">
        Ethan Caldwell onSeptember 29, 2024
      </CardContent>
      <CardFooter className="-mt-2">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

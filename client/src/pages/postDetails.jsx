import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";

const PostDetails = () => {
  const postId = useParams().postId;
  console.log(postId);

  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/posts/${postId}`, {
        method: "GET",
        contentType: "application/json",
      });
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
};

export default PostDetails;

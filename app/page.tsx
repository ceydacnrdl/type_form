"use client";

import React from "react";
import Slider from "@/components/Slider";
import { useFetchAllComponents } from "@/hooks/useFetchAllComponents";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/hooks/posts";

export default function Home() {
  // const createPostMutation = useMutation({
  //   mutationFn: createPost,
  // });

  // const handlerAddPost = (post: any) => {
  //   createPostMutation.mutate({
  //     id: 1,
  //     ...post,
  //   });
  //   console.log("post", post);
  // };

  return (
    <div className="relative min-h-screen text-center content-center bg-main">
      <Slider />

      {/* <button onClick={handlerAddPost}>tıkla bana</button> */}
    </div>
  );
}

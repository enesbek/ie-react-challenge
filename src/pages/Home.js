import React, { useEffect, useState } from "react";
import Service from "../services/postService";
import PostCard from "../components/post-card";
import { PostModal } from "../components/post-modal";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getAllPosts = async () => {
    const response = await Service.GetAllPosts();
    console.log(response);
    setPosts(response);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="flex items-center flex-col border border-2-black gap-10 pt-10">
      {showModal ? (
        <>
          <PostModal isOpen={showModal} onClose={handleModalClose} />
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      {posts.map((post) => (
        <div onClick={handleModalOpen}>
          <PostCard title={post.title} description={post.body} />
        </div>
      ))}
    </div>
  );
};

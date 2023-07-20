import React, { useEffect, useState } from "react";
import Service from "../services/service";
import PostCard from "../components/PostCard";
import { PostModal } from "../components/PostModal";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const getAllPosts = async () => {
    const response = await Service.GetAllPosts();
    console.log(response);
    setPosts(response);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleModalOpen = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && selectedPost ? (
        <>
          <PostModal
            isOpen={showModal}
            onClose={handleModalClose}
            post={selectedPost}
          />
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      <div className="grid items-center grid-cols-2 border border-2-black gap-10 pt-10 p-10">
        {posts.map((post, index) => (
          <div key={index} onClick={() => handleModalOpen(post)}>
            <PostCard title={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

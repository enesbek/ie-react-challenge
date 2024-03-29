import React, { useEffect, useState } from "react";
import Service from "../services/service";
import styles from "./components.module.scss";

export const PostModal = ({ isOpen, onClose, post }) => {
  const [postComments, setPostComments] = useState();

  const getPostDetail = async () => {
    const response = await Service.GetPostDetail(post.id);
    console.log(response);
    setPostComments(response);
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  if (!isOpen) return null;
  if (!postComments) return null;
  return (
    <>
      <div className={styles.postModalContainer}>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{post.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black opacity-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  &#10006;
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {post.body}
              </p>
            </div>

            <div className="grid items-center grid-cols pt-4 p-10 gap-10">
              {postComments.map((comment) => (
                <div className="">
                  <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                    <div className="relative flex gap-4">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                        className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                        alt=""
                        loading="lazy"
                      />
                      <div className="flex flex-col">
                        <div className="flex">
                          <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                            {comment.name}
                          </p>
                        </div>

                        <div className="text-gray-400 text-sm align-left">
                          {comment.email}
                        </div>
                      </div>
                    </div>
                    <p className="-mt-4 text-black-500">{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

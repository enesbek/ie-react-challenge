import React, { useEffect, useState } from "react";
import Service from "../services/service";

export const UserModal = ({ isOpen, onClose, user }) => {
  const [userDetail, setUserDetail] = useState();

  const getUserDetail = async () => {
    const response = await Service.GetUserDetail(user.id);
    console.log(response);
    setUserDetail(response);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  if (!isOpen) return null;
  if (!userDetail) return null;
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">{user.name}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="text-black-600 opacity-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  &#10006;
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="m-4">Mail: {user.email}</div>
            <div className="flex flex-col justify-start">
              <p className="text-black-500 text-md leading-relaxed">
                Gender: {user.gender}
              </p>
              <p className="text-black-500 text-md leading-relaxed">
                Status: {user.status}
              </p>
            </div>
            <div className="grid items-center grid-cols pt-4 p-10 gap-10">
              {userDetail.map((comment) => (
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
                            {comment.title}
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
    </div>
  );
};

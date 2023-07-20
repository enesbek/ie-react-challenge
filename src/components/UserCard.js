import React from "react";

const UserCard = ({ title }) => {
  return (
    <div className="flex max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 gap-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        width={50}
      />
      <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-black">
        {title}
      </h5>
    </div>
  );
};

export default UserCard;

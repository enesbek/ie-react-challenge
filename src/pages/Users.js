import React, { useEffect, useState } from "react";
import Service from "../services/service";
import UserCard from "../components/UserCard";
import { UserModal } from "../components/UserModal";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const getAllUsers = async () => {
    const response = await Service.GetAllUsers();
    console.log(response);
    setUsers(response);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && selectedUser ? (
        <>
          <UserModal
            isOpen={showModal}
            onClose={handleModalClose}
            user={selectedUser}
          />
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      <div className="grid items-center grid-cols-2 border border-2-black gap-10 pt-10 p-10">
        {users.map((user, index) => (
          <div key={index} onClick={() => handleModalOpen(user)}>
            <UserCard title={user.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

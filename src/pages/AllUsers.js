import React, { useEffect } from "react";
import UserList from "../components/users/UserList";
import useHttp from "../hooks/use-http";
import { getAllUsers } from "../api/userApi";
import NoUsersFound from "../components/users/NoUserFound";

const AllUsers = () => {
  const {
    sendRequest,
    status,
    data: loadedUsers,
    error,
  } = useHttp(getAllUsers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <div className="centered"> Loading...</div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedUsers || loadedUsers.length === 0)) {
    return <NoUsersFound />;
  }
  return (
      <UserList users={loadedUsers} />
  );
};

export default AllUsers;

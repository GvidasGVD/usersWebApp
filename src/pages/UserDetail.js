import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleUser, updateUser } from "../api/userApi";
import UserDetails from "../components/users/UserDetails";


const UserDetail = () => {
  const params = useParams();
  const { sendRequest: sendtUpdateRequest, status: updateStatus } = useHttp(updateUser, true);

  const { userId } = params;
  const {
    sendRequest,
    status,
    data: loadedUser,
    error,
  } = useHttp(getSingleUser, true);

  useEffect(() => {
      sendRequest(userId);

  }, [sendRequest,updateStatus, userId]);

  const sendtUpdateRequestHandler = (data, userId) => {
    sendtUpdateRequest(data, userId);
  }

  if (status === "pending") {
    return <div className="centered"> Loading...</div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedUser) {
    return <p>No User found</p>;
  }
  return (
    <Fragment>
      <UserDetails
        id={userId}
        name={loadedUser.name}
        surname={loadedUser.surname}
        birth_date={loadedUser.birth_date}
        email={loadedUser.email}
        password={loadedUser.password}
        phone={loadedUser.phone}
        identity={loadedUser.identity}
        passport_number={loadedUser.passport_number}
        sendUpdateRequest={sendtUpdateRequestHandler}
      />
    </Fragment>
  );
};

export default UserDetail;

import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserItem from "./UserItem";
import classes from "./UserList.module.css";
const sortUsers = (users, ascending) => {
  return users.sort((userA, userB) => {
    if(ascending) {
      return userA.name > userB.name ? 1: -1;
    } else {
      return userA.name < userB.name ? 1: -1;
    }
  })
}

const UserList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedUsers = sortUsers(props.users, isSortingAscending)


  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending?'desc':'asc')}`
    })
    // less readable:
    // history.push(`${location.pathname}?sort=${(isSortingAscending?'desc':'asc')}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedUsers.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            phone={user.phone}
            email={user.email}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default UserList;

// TODO: your api calls should be here
const FIREBASE_DOMAIN =
  "https://users-db-2791b-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getAllUsers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch users.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const userObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(userObj);
  }

  return transformedUsers;
}

export async function getSingleUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch user.");
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function deleteUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete user.");
  }

return null
}

export async function updateUser(userData, userId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`, {
      method: "PUT",
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Could not update user.");
    }
    
  
  return null
  }

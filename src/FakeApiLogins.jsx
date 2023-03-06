const users = [
  {
    "id": 1,
    "login": "johndoe",
    "username": "John Doe",
    "password": "password123"
  },
  {
    "id": 2,
    "login": "janedoe",
    "username": "Jane Doe",
    "password": "password456"
  },
  {
    "id": 3,
    "login": "bobsmith",
    "username": "Bob Smith",
    "password": "password789"
  },
  {
    "id": 4,
    "login": "sarahbrown",
    "username": "Sarah Brown",
    "password": "passwordABC"
  },
  {
    "id": 5,
    "login": "mikejones",
    "username": "Mike Jones",
    "password": "passwordDEF"
  },
  {
    "id": 6,
    "login": "janetdoe",
    "username": "Janet Doe",
    "password": "passwordGHI"
  },
  {
    "id": 7,
    "login": "jimmyjohns",
    "username": "Jimmy Johns",
    "password": "passwordJKL"
  },
  {
    "id": 8,
    "login": "ashleyadams",
    "username": "Ashley Adams",
    "password": "passwordMNO"
  },
  {
    "id": 9,
    "login": "kevinlee",
    "username": "Kevin Lee",
    "password": "passwordPQR"
  },
  {
    "id": 10,
    "login": "amandawilliams",
    "username": "Amanda Williams",
    "password": "passwordSTU"
  },
  {
    "id": 11,
    "login": "jasonbrown",
    "username": "Jason Brown",
    "password": "passwordVWX"
  },
  {
    "id": 12,
    "login": "emilydavis",
    "username": "Emily Davis",
    "password": "passwordYZA"
  },
  {
    "id": 13,
    "login": "michaelwilson",
    "username": "Michael Wilson",
    "password": "passwordBCD"
  },
  {
    "id": 14,
    "login": "samanthasmith",
    "username": "Samantha Smith",
    "password": "passwordEFG"
  },
  {
    "id": 15,
    "login": "davidjones",
    "username": "David Jones",
    "password": "passwordHIJ"
  }
]


export const getUsers = () => {
  return users;
};

export const getUsersByLogin = (login) => {
  return users.find((user) => user.login === login);
};

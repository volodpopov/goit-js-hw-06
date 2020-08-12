'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => {
      if (user.friends.includes(friendName)) return user;
    })
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

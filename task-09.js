'use strict';

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((prevFriendsCount, nextFriendsCount) => {
      return prevFriendsCount.friends.length - nextFriendsCount.friends.length;
    })
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

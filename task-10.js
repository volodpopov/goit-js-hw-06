'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])

    .reduce((acc, skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, [])
    
    .sort();
};

console.log(getSortedUniqueSkills(users));

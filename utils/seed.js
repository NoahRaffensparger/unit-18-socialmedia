const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomName,
  getRandomEmail,
  getRandomThoughts,
  genRandomIndex,
  getRandomReactions
} = require('./data')

console.time('seeding');

// connection.once('open', async () => {

//   let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//   if (usersCheck.length) {
//     await connection.dropCollection('users');
//   }

//   let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
//   if (thoughtsCheck.length) {
//     await connection.dropCollection('thoughts');
//   }

//   const users = []
//   const thoughts = []

//   for (let i = 0; i < 20; i++) {
//     const username = getRandomName();
//     const email = getRandomEmail()
//     const addThoughts = getRandomThoughts(3)

//     thoughts.push({
//       addThoughts
//     })
//     users.push({
//       username,
//       email,
//       thoughts
//     });
//   }

//   await User.insertMany(users);
//   await Thought.insertMany(thoughts);



//   console.table(users);
//   console.table(thoughts);
//   console.timeEnd('seeding complete 🌱');
//   process.exit(0);
// });

connection.once('open', async () => {

  let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (usersCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }


  const users = [];
  const thoughts = [];

  for (let i = 0; i < 60; i++) {
    thoughts.push({
      thoughtText: getRandomThoughts(),
      username: getRandomName(),
      reactions: [...getRandomReactions(3)]
    });
  }

  const insertedThoughts = await Thought.insertMany(thoughts);
  const thoughtIds = insertedThoughts.map(thought => thought._id);

  for (let i = 0; i < 20; i++) { 
    const username = getRandomName();
    const email = getRandomEmail();

    const userThoughts = [];
    for (let j = 0; j < 3; j++) {
      userThoughts.push(thoughtIds[i * 3 + j]); 
    }

    users.push({
      username,
      email,
      thoughts: userThoughts
    });
  }

  const insertedUsers = await User.insertMany(users);
  const userIds = insertedUsers.map(user => user._id);

  for (let i = 0; i < 20; i++) { 

    const userFriends = [];

    for (let j = 0; j < 3; j++) {
      const randomFriendId = userIds[Math.floor(Math.random() * userIds.length)];
      if (randomFriendId.toString() !== userIds[i].toString()) {
        userFriends.push(randomFriendId);
      }
    }

    await User.updateOne(
      { _id: userIds[i] },
      { $set: { friends: userFriends } }
    );
  }

  console.table(users);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
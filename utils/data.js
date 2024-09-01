const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughts = [
  "Just finished a great workout at the gym! Feeling accomplished.",
  "Had an amazing lunch at that new cafe downtown. Highly recommend!",
  "Can't believe how fast this week has gone by. Looking forward to the weekend!",
  "Just got my hands on the latest book by my favorite author. Excited to start reading!",
  "Finally tried that new recipe I've been eyeing for weeks. It turned out delicious!",
  "Had a wonderful time catching up with old friends last night. It's great to reconnect!",
  "Woke up to the most beautiful sunrise this morning. Nature is truly incredible.",
  "Excited to announce that I've started a new project. Stay tuned for updates!",
  "Spent the day exploring a new part of town. Found some hidden gems!",
  "Feeling grateful for all the support and positivity from everyone. Thank you!",
  "Just watched an incredible movie. Highly recommend it if you’re looking for something new.",
  "Can’t wait for the upcoming concert this weekend. It’s going to be epic!"
];

const reactions = [
  "Wow, that sounds amazing! 😊",
  "So happy for you! 🎉",
  "Sounds like a great time. Thanks for sharing!",
  "Glad you enjoyed it! 👍",
  "That’s awesome! Can’t wait to hear more.",
  "Great post! Keep up the good work.",
  "You’re inspiring! Keep it up.",
  "Looks like you had a blast. Thanks for the update!",
  "That’s fantastic! Hope you have more great moments.",
  "Really interesting! I’ll have to check it out.",
  "Love this! Thanks for sharing your experience.",
  "Congratulations on the new project! Looking forward to it."
];
const emails = [
  "emma.jones@example.com",
  "michael.smith@example.org",
  "olivia.brown@example.net",
  "liam.johnson@example.co",
  "sophia.davis@example.com",
  "noah.martin@example.org",
  "isabella.garcia@example.net",
  "jacob.lee@example.co",
  "mia.wilson@example.com",
  "ethan.taylor@example.org",
  "ava.anderson@example.net",
  "mason.moore@example.co",
  "alex.martinez@example.com",
  "chris.hall@example.com",
  "katie.wright@example.org",
  "ryan.jones@example.net",
  "laura.carter@example.com",
  "mark.baker@example.org",
  "susan.ross@example.net",
  "david.green@example.co",
  "nina.adams@example.com",
  "bradley.lee@example.org",
  "carla.morris@example.net",
  "joshua.cooper@example.com",
  "lisa.walker@example.org",
  "james.thompson@example.net",
  "amanda.kelly@example.co",
  "brian.martin@example.com",
  "emily.wilson@example.org",
  "sean.cook@example.net",
  "rachel.wood@example.co",
  "tyler.james@example.com"
]

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

// const getRandomPost = (words) => {
//   let post = '';
//   for (let i = 0; i < words; i++) {
//     post += ` ${getRandomWord()}`;
//   }
//   return post;
// };

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomEmail = () => 
  getRandomArrItem(emails)

const getRandomThoughts = () => 
  getRandomArrItem(thoughts)
// Function to generate random thoughts given a number
// const getRandomThoughts = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(thoughts),
//       username:  getRandomName().split(' ')[0],
//       responses: [...getRandomReactions(3)],
//     });
//   }
//   return results;
// };

const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomName().split(' ')[0],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomName,
  getRandomEmail,
  getRandomThoughts,
  genRandomIndex,
  getRandomReactions
};

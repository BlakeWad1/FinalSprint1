import React from "react";

export default function Data() {
  return <div>Data</div>;
}

export const Users = [
  {
    id: 1,
    profilePicture: "../public/assets/boats/download-1.jpg",
    username: "O'Briens Boat Tours",
  },
  {
    id: 2,
    profilePicture: "assets/download-2.jpg",
    username: "Gatherall's Puffin and Whale Watch",
  },
  {
    id: 3,
    profilePicture: "assets/download-3.jpg",
    username: "Iceberg Quest Ocean Tours",
  },
  {
    id: 4,
    profilePicture: "assets/download-4.jpg",
    username: "Ecotours Zodiac Adventures",
  },
  {
    id: 5,
    profilePicture: "assets/download-5.jpg",
    username: "Molly Bawn Whale and Puffin Tours",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Come Sail With The O'Briens.",
    photo: "../public/assets/boats/download-1.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    desc: "Puffins, Whales and Icebergs. 35 Years of Great Service.",
    photo: "assets/download-2.jpg",
    date: "15 mins ago",
    userId: 2,
    like2: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Step aboard… experience the WONDER.",
    photo: "assets/download-3.jpg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    desc: "Puffins and Whale Tours. Take a zodiac ride with us and get a front row seat to the best Newfoundland has to offer!",
    photo: "assets/download-4.jpg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    desc: "An experience you'll remember for a lifetime.",
    photo: "assets/download-5.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
];

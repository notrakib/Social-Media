import classes from "./RecentPost.module.css";
import React, { Fragment, useState } from "react";

import Card from "../Card";
import Posts from "./Posts";
import AllComments from "../comment/AllComments";

const array = [
  {
    id: "01",
    upvote: 0,
    date: new Date(2020, 1, 10),
    name: "Shamun Islam Prince",
    post: "When praying behind an imam in loud prayers can we say the fatiha with him in very low voice? Or is it better not to say it at all as there is no time to say it after him because he starts the second sourat straight away?",
    comments: [
      {
        id: "01",
        date: new Date(2020, 1, 21),
        name: "Akbar ALi",
        post: "nice",
      },
      {
        id: "02",
        date: new Date(2020, 1, 23),
        name: "MD Hossain",
        post: "Yes",
      },
    ],
    shares: 0,
  },
  {
    id: "02",
    upvote: 0,
    date: new Date(2020, 11, 3),
    name: "MD Hossain",
    post: "Ma Shaa Allahin the age of social media and so many distractions The memorizers of the Noble Quran are filling the corners of the world",
    comments: [],
    shares: 0,
  },
  {
    id: "03",
    upvote: 0,
    date: new Date(2020, 7, 15),
    name: "Saiful Azim Minhaz",
    post: "Is there any chance bitcoin go 45k-48k this year???",
    comments: [],
    shares: 0,
  },
];

const RecentPost = () => {
  const [showAllComment, setshowAllComment] = useState(0);

  return (
    <Fragment>
      {showAllComment === 0 && (
        <Card>
          <div className={classes.recentposts}>
            {array.map((item) => (
              <Posts key={item.id} item={item}></Posts>
            ))}
          </div>
        </Card>
      )}
      {showAllComment === 1 && (
        <Card>
          <AllComments item={array[0]}></AllComments>
        </Card>
      )}
    </Fragment>
  );
};

export default RecentPost;

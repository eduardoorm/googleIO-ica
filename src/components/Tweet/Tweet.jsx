import React from "react";
import "./Tweet.css";
import ItemTweet from "./ItemTweet";
const Tweet = () => {
  return (
    <div className="sectionTweets">
      <h1 className="title">Menciones</h1>
      <div className="containerTweets">
        <ItemTweet />
        <ItemTweet />
        <ItemTweet />
      </div>
    </div>
  );
};

export default Tweet;

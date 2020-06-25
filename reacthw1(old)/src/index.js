import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// profile
import Profile from "./socialProfile/Profile";
import user from "./socialProfile/user.json";
//statistics
import Statistics from "./statisticsSection/Statistics";
import data from "./statisticsSection/statistics-data.json";
//
//friendList
import FriendList from "./FriendList/FriendList";
import friendsData from "./FriendList/friends.json";
//
//transaction history
import TransactionHistory from "./Transactions/Transactions";
import transactions from "./Transactions/transactions.json";
//
//отрисовываю все задания сразу

ReactDOM.render(
  <>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title='Upload stats' stats={data} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactions} />
  </>,
  document.querySelector("#root")
);

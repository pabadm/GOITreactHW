
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// profile
import Profile from './socialProfile/Profile';
import user from './socialProfile/user.json';
//statistics
import Statistics from './statisticsSection/Statistics';
import data from './statisticsSection/statistics-data.json';
//
//friendList
import FriendList from './FriendList/FriendList';
import friendsData from './FriendList/friends.json';
//
//transaction history
import TransactionHistory from './Transactions/Transctions';
import transactions from './Transactions/transactions.json';
//
//отрисовываю все задания сразу


ReactDOM.render(
    <>
        <Profile props={user}/>
        <Statistics title='Upload stats' props={data}/>
        <FriendList props={friendsData}/>
        <TransactionHistory props={transactions} />
    </>
    ,document.querySelector('#root'))


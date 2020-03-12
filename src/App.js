import React from 'react';
import Profile from './components/Profile/Profile';
import userProfile from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import dataStatistics from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import dataFriendList from './components/FriendList/friends.json';
import TransactionHistory from './components/Transaction/TransactionHistory';
import dataTransactionHistory from './components/Transaction/transaction.json';

const App = () => (
  <>
    <Profile user={userProfile} />
    <Statistics title="File upload" stats={dataStatistics} />
    <FriendList friends={dataFriendList} />
    <TransactionHistory items={dataTransactionHistory} />
  </>
);

export default App;

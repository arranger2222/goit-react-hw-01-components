import { UserCard } from './UserCard/UserCard';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends from 'friends.json'
import transactions from 'transactions.json'
import user from 'user.json';
import data from 'data.json';


export const App = () => {
  return (
    <>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />;
     </>
  );
};


// import {  Profile, Statistics, StatisticsList, FriendList, FriendListItem,  TransactionHistory} from 'components';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transitions from 'data/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { StatisticsList } from 'components/Statistics/StatisticsList';

export const App = () => {
  return (
    <>
      <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" >
          <StatisticsList stats={data}/>
      </Statistics>
      <FriendList friends={friends} />;
    </>
  );
};




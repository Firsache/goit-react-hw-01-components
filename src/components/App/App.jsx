import {  Profile, Statistics} from 'components';
import user from 'data/user.json';
import data from '/path/to/data.json';

// FriendList, FriendListItem,  TransactionHistory

export const App = () => {
  return (
    <Container>
      <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />        
        <Statistics stats={data} />
    </Container>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    
  );
};




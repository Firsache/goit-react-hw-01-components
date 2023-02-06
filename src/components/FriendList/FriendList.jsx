import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
  return (
    <ul class="friend-list">{friends.map(({avatar, name, isOnline, id}))=>{
      return <FriendListItem key={id} avatar={avatar} name={ name} isOnline={isOnline} />
    }}
    </ul>
  )
}
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}
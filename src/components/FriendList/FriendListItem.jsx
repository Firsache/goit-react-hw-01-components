import { FriendsItem, OnlineIndicator, FriendAvatar, FriendName } from "./FriendList.styled"

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem key={id}>
      <OnlineIndicator isOnline = {isOnline}></OnlineIndicator>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{ name}</FriendName>
    </FriendsItem>
  )
}



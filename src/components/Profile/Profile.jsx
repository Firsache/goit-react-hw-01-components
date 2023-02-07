import PropTypes from 'prop-types';
import { Card, Description, Avatar, TextAccent, StatsInfo, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => {
  return (
    <Card>
      <Description>
        <Avatar
          src={avatar}
          alt={tag}
          width="100"
          className="avatar"
        />
        <TextAccent>{username}</TextAccent>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      
      <StatsInfo>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </StatsInfo>
    </Card>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
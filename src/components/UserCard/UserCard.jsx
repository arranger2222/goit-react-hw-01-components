import PropTypes from 'prop-types';
import { ContainerProfile, Description, ImgAvatar, Name, Tag, Location, StatsProfile, StatsItem, Label, Quantity } from './UserCard.styled'


export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return <ContainerProfile>
      <Description>
          <ImgAvatar
              src={avatar}
              alt={username}
          />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
      </Description>

      <StatsProfile>
          <StatsItem>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
          </StatsItem>
      </StatsProfile>
  </ContainerProfile>;
};

UserCard.propTypes = { 
    username: PropTypes.string, 
    location: PropTypes.string, 
    tag:PropTypes.string, 
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number, 
    likes: PropTypes.number,
}
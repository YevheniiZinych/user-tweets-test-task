import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CardContainer,
  LineLeft,
  LineRight,
  Button,
  TextWrapper,
  DecorImg,
  AvatarFrame,
  UserImg,
  CardWrapper,
} from './UserCard.styled';
import imageBack from '../../images/card-back.png';
import avatarFrame from '../../images/circle.png';
// import { getUsers } from 'redux/userSlice/selectors';
// import { fetchUsers } from 'redux/userSlice/operations';
// import { updateFollowers } from 'redux/userSlice/operations';
import { getUser } from 'api/operations';

export const UserCard = ({ users }) => {
  const [isClicked, setIsClicked] = useState(true);

  const onFollowersUpdateClick = (id, followers) => {
    console.log(followers);

    const counter = followers + (isClicked ? -1 : 1);

    setIsClicked(prevState => !prevState);
  };

  return (
    <CardWrapper>
      {users.length > 0 &&
        users.map(({ avatar, tweets, followers, id }) => {
          return (
            <CardContainer key={id}>
              <DecorImg src={imageBack} alt="background-img-card" />
              <AvatarFrame src={avatarFrame} alt="avatar-frame" />
              <UserImg src={avatar} alt="user-avatar" />
              <LineLeft> </LineLeft>
              <LineRight></LineRight>
              <TextWrapper>
                <p>{tweets} TWEETS</p>
                <p>{followers} FOLLOWERS</p>
                <Button
                  onClick={() => onFollowersUpdateClick(id, followers)}
                  type="button"
                >
                  FOLLOW
                </Button>
              </TextWrapper>
            </CardContainer>
          );
        })}
    </CardWrapper>
  );
};

import {
  CardContainer,
  LineLeft,
  LineRight,
  Button,
  TextWrapper,
  DecorImg,
  AvatarFrame,
} from './UserCard.styled';
import imageBack from '../../images/card-back.png';
import avatarFrame from '../../images/circle.png';

export const UserCard = () => {
  return (
    <div>
      <CardContainer>
        <DecorImg src={imageBack} alt="background-img-card" />
        <AvatarFrame src={avatarFrame} alt="avatar-frame" />
        <LineLeft> </LineLeft>
        <LineRight></LineRight>
        <TextWrapper>
          <p>777 TWEETS</p>
          <p>100.500 FOLLOWERS</p>
          <Button type="submit">FOLLOW</Button>
        </TextWrapper>
      </CardContainer>
    </div>
  );
};

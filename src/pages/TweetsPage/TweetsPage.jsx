import { useState, useEffect } from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import { TweetContainer } from './TweetsPage.styled';
import { getUser } from 'api/operations';

export const TweetsPage = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUser().then(response => setUsers([...users, ...response]));
  // }, [users]);
  return (
    <TweetContainer>
      <UserCard />
    </TweetContainer>
  );
};

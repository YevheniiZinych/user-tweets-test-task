import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/userSlice/selectors';
import { updateFollowers } from 'redux/userSlice/operations';

export const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { items } = useSelector(getUsers);
  const dispatch = useDispatch();

  const onFollowersUpdateClick = (id, followers) => {
    const counter = followers + (isClicked ? -1 : 1);
    dispatch(updateFollowers({ id, followers: counter }));
    setIsClicked(prevState => !prevState);
  };

  return <button onClick={onFollowersUpdateClick} type="button"></button>;
};

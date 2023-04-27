import { NavContainer, StyledLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <nav>
      <NavContainer>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </NavContainer>
    </nav>
  );
};

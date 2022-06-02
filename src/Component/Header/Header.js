import { StyledHeader } from "./Header.style";
const Header = ({ showName, logoutFromUser }) => {
  return (
      <StyledHeader>
          <p><strong>Hello</strong> {showName}</p>
          <button onClick={logoutFromUser}>Logout</button>
      </StyledHeader>
  )
}

export default Header;
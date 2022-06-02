
const Header = ({ showName, logoutFromUser }) => {
  return (
      <header>
          <p><strong>Hello</strong> {showName}</p>
          <button onClick={logoutFromUser}>Logout</button>
      </header>
  )
}

export default Header;
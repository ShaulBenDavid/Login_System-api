import { ThemeProvider } from 'styled-components';
import { theme } from './GlobalDesgin/theme';
import GlobalStyled from './GlobalDesgin/Global';
import Login from './Component/Login/Login';
import Register from './Component/register/Register';
import PostsList from './Component/PostsList/PostsList';
import { useState, useEffect, Fragment } from 'react';
import * as S from './App.style';
import abraLogo from './Assets/logo.png';
import Header from './Component/Header/Header';

function App() {
  const [accessToken, setAccessToken] = useState(undefined);
  const [showName, setShowName] = useState(() => '');
  const [signType, setSignType] = useState(true);
  const [userIsActive, setUserIsActive] = useState(false);

  useEffect(() => {
    setAccessToken(localStorage.getItem("AccessToken"));
  }, [])

  //Deploy access token
  const addAccessToken = (event) => {
    setAccessToken(event[0]);
    localStorage.setItem("AccessToken", event[0])
    if (event[0]) {
      setUserIsActive(true);
    }
    setShowName(event[1]);
    localStorage.setItem("UserName", event[1])
  }

  // Stay login when loading the broswer

  // Logout
  const logoutFromUser = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("UserName");
    setUserIsActive(false);
  };


  // Toggle Form types
  const handleSignType = () => {
    setSignType(!signType);
  };


  // <Register />
  return (
    <ThemeProvider theme={ theme }>
      <S.AppContainer>
        <GlobalStyled />
        {!userIsActive ?

          <S.AuthBox>
            <S.FormSide>  
              {signType ?
                <Login addAccessToken={addAccessToken} />
                :
                <Register setSignType={setSignType} signType={signType} />
              }
              <p>
                {signType ? 'Not a member?' : 'Already registered?'}
                <S.ToggleButton type='button' onClick={handleSignType}>{signType ? "Sign Up" : "Sign In"}</S.ToggleButton>
              </p>
            </S.FormSide>

            <S.Banner>
              <img src={abraLogo} alt="Logo" />
            </S.Banner>
          </S.AuthBox>
          
          :
        
          <Fragment>
            <Header showName={showName} logoutFromUser={logoutFromUser}/>
            <PostsList accessToken={accessToken}/>
          </Fragment>        
        }

      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;

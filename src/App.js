import { ThemeProvider } from 'styled-components';
import { theme } from './GlobalDesgin/theme';
import GlobalStyled from './GlobalDesgin/Global';
import Login from './Component/Login/Login';
import Register from './Component/register/Register';
import PostsList from './Component/PostsList/PostsList';
import { useState, useEffect } from 'react';
import * as S from './App.style';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';

function App() {
  const [accessToken, setAccessToken] = useState(undefined);
  const [showName, setShowName] = useState(() => '');
  const [signType, setSignType] = useState(true);
  const [userIsActive, setUserIsActive] = useState(false);

  useEffect(() => {
    setAccessToken(localStorage.getItem("AccessToken"));
  }, [])

  //Deploy access token and login
  const addAccessToken = (event) => {
    setAccessToken(event[0]);
    localStorage.setItem("AccessToken", event[0])
    if (event[0]) {
      setUserIsActive(true);
    }
    setShowName(event[1]);
    localStorage.setItem("UserName", event[1])
  } 



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

            <Banner/>
          </S.AuthBox>
          
          :
        
          <S.HomePage>
            <Header showName={showName} logoutFromUser={logoutFromUser}/>
            <PostsList accessToken={accessToken} logoutFromUser={logoutFromUser}/>
          </S.HomePage>        
        }

      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;

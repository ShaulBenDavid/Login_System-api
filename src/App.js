import { ThemeProvider } from 'styled-components';
import { theme } from './GlobalDesgin/theme';
import GlobalStyled from './GlobalDesgin/Global';
import Login from './Component/Login/Login';
import Register from './Component/register/Register';
import PostsList from './Component/PostsList/PostsList';
import { useState, useEffect, Fragment } from 'react';
import * as S from './App.style';
import abraLogo from './Assets/logo.png';

function App() {
  const [accessToken, setAccessToken] = useState(undefined);
  const [ShowName, setShowName] = useState('');
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
                <Register />
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
            <p><strong>Hello</strong> {ShowName}</p>
             <PostsList accessToken={accessToken} />
          </Fragment>        
        }

      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;

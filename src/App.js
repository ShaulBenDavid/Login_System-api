import { ThemeProvider } from 'styled-components';
import { theme } from './GlobalDesgin/theme';
import GlobalStyled from './GlobalDesgin/Global';
import Login from './Component/Login/Login';
import Register from './Component/register/Register';
import PostsList from './Component/PostsList/PostsList';
import { useEffect, useState } from 'react';
import * as S from './App.style';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import { getPosts } from './Services/Api';

function App() {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("AccessToken"));
  const [showName, setShowName] = useState(() => localStorage.getItem("UserName"));
  const [signType, setSignType] = useState(true);
  const [userIsActive, setUserIsActive] = useState(false);
  const [myItems, setMyItems] = useState(() => []);

  // Get Items And stay login
  useEffect(() => {
    const fetchData = async () => {
      // Get Items
      const data = await getPosts(accessToken);
      console.log(data);
      if (data) {
        setMyItems(data);
        setUserIsActive(true);
      }
    }
 
    fetchData();
  }, [accessToken]);
  
  //Deploy access token and login
  const addUserProfile = async (event) => {
    setAccessToken(event[0]);
    localStorage.setItem("AccessToken", event[0]);

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
                <Login addUserProfile={addUserProfile} />
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
            <PostsList accessToken={accessToken} logoutFromUser={logoutFromUser} myItems={myItems} setMyItems={setMyItems}/>
          </S.HomePage>        
        }

      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;

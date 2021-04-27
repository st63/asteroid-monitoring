import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import { MainPage } from './pages/MainPage';
import ForDestruction from './pages/ForDestruction';
import { AsteroidDetailWrap } from './pages/AsteroidDetail';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
`

const StyledMainPage = styled.div`
width: 952px;
height: 200px;
padding: 37px 16px 46px 16px;
@media ${({ theme }) => theme.media.phone} {
   width: 100%;
   padding-top: 8px;
   }
`

function App(props) {
  return (
    <StyledContainer>
      <StyledMainPage props={props}>
        <BrowserRouter>
          <Switch>
            <Route path='/asteroid-detail/:id' component={AsteroidDetailWrap} />
            <Route path='/for-destruction' component={ForDestruction} />
            <Route path='/' component={MainPage} />
          </Switch>
        </BrowserRouter>
      </StyledMainPage>
    </StyledContainer>
  );
}

export default App;

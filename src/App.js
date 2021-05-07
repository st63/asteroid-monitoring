import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/index';
import ForDestruction from './pages/ForDestruction/index';
import { AsteroidDetailWrap } from './pages/AsteroidDetail/index';
import { StyledContainer, StyledMainPage } from './styles';

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

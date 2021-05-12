import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/index';
import ForDestruction from './pages/ForDestruction/index';
import AsteroidDetail from './pages/AsteroidDetail/index';
import { StyledContainer, StyledMainPage } from './styles';

function App(props) {
  return (
    <StyledContainer>
      <StyledMainPage props={props}>
        <HashRouter>
          <Switch>
            <Route path="/asteroid-detail/:id" component={AsteroidDetail} />
            <Route path="/for-destruction" component={ForDestruction} />
            <Route path="/" component={MainPage} />
          </Switch>
        </HashRouter>
      </StyledMainPage>
    </StyledContainer>
  );
}

export default App;

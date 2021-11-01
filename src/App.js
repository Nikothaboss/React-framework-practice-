import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppWrapper, GlobalStyle } from './app.styled';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/API'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;

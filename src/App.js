import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FramerMotion from './components/FramerMotion/FramerMotion';
import ChakraUI from './components/ChakraUI/ChakraUI';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AppWrapper, GlobalStyle } from './app.styled';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        {/* <Router> */}
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/FramerMotion'>
              <FramerMotion />
            </Route>
            <Route path='/ChakraUI'>
              <ChakraUI />
            </Route>
            <Route path='/API'>
              <Main />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
        {/* </Router> */}
      </AppWrapper>
    </>
  );
}

export default App;

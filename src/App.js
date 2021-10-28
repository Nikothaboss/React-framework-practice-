import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { AppWrapper, GlobalStyle } from './app.styled';

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
    </>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Routes from './config/Routes.jsx';
import Container from '@material-ui/core/Container';
import ProvideAuth from './hooks/useAuth.jsx';
import { StateProvider } from './contexts/StateContext';

function App() {
  return (
    <StateProvider>
      <ProvideAuth>
        <Header />
        <Container maxWidth='lg'>
          <Routes />
        </Container>
      </ProvideAuth>
    </StateProvider>
  );
}

export default App;

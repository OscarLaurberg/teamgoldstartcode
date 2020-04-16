import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import Routes from './config/Routes';
import Container from '@material-ui/core/Container';
import ProvideAuth from './hooks/useAuth';
import { StateProvider } from './contexts/StateContext';

function App() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const toggleModalLogin = () => setShowModalLogin(!showModalLogin);

  let history = useHistory();

  return (
    <StateProvider>
      <ProvideAuth>
        <Header toggleModal={toggleModalLogin} />
        <Container maxWidth='lg'>
          <Routes />
        </Container>
      </ProvideAuth>
    </StateProvider>
  );
}

export default App;

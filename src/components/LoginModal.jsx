import React from 'react';
import ToggleContent from './ToggleContent.jsx';
import Modal from '../components/Modal';
import LogIn from '../components/Login';
import { IconButton } from '@material-ui/core';
import { useAuth } from '../hooks/useAuth.jsx';

const LoginModal = () => {
  const {
    user: { isLoggedIn }
  } = useAuth();

  // Toggler
  const loginBtn = (show) => {
    const btnTxt = isLoggedIn ? 'Logout' : 'Login';
    return (
      <IconButton color='inherit' onClick={show}>
        {btnTxt}
      </IconButton>
    );
  };

  // Content
  const modalContent = (hide) => {
    return (
      <Modal hideModal={hide}>
        <LogIn hideModal={hide} />
      </Modal>
    );
  };

  return (
    <ToggleContent
      toggler={(show) => loginBtn(show)}
      content={(hide) => modalContent(hide)}
    />
  );
};

export default LoginModal;

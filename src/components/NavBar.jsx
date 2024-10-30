import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton'; 

import './NavBar.css'; 

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [postMessageVisible, setPostMessageVisible] = useState(false);
  const [postMessage, setPostMessage] = useState('');

  const handleHomeClick = () => {
    setPostMessageVisible(false);
    setPostMessage('');
    navigate('/home');
  };

  const handlePostClick = () => {
    setPostMessageVisible(false);
    setPostMessage('');
    navigate('/login');
  };

  const handleQuestionClick = () => {
    setPostMessageVisible(false);
    setPostMessage('');
    navigate('/Question');
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setPostMessageVisible(false);
      setPostMessage('');
    }
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand" onClick={handleHomeClick}>
          DEV@Deakin
        </div>
        <div className="navbar-items">
          <input type="text" placeholder="Search..." className="navbar-search" />
          <button className="navbar-button" onClick={handleHomeClick}>
            Home
          </button>
          <button className="navbar-button" onClick={handlePostClick}>
            Post
          </button>
          <LogoutButton /> 
          <button className="navbar-button" onClick={handleQuestionClick}>
           Find
          </button>
        </div>
      </nav>
      <div className="content">
        {postMessageVisible && <p className="post-message">{postMessage}</p>}
      </div>
    </>
  );
};

export default NavBar;

import React from 'react';
import './App.scss';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import {useSelector} from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import {Route, Routes} from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import SignInPage from './pages/SignInPage/SignInPage';

/**
 * @return {string} App.
 */
function App() {
  const theme = useSelector((state) => state.themeSlice.theme);
  return (
    <div id='page' className={theme}>
      <ThemeSwitcher />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/login' element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;

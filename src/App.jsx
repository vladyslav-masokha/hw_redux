import React from 'react';
import './App.scss';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import {useSelector} from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import {Route, Routes} from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ForgetPassPage from './pages/ForgetPassPage/ForgetPassPage';

/**
 * @return {string} App.
 */
function App() {
  const theme = useSelector((state) => state.themeSlice.theme);
  return (
    <div id='page' className={theme}>
      <ThemeSwitcher />
      <Routes>
        <Route path='/hw_redux/' element={<HomePage />} />
        <Route path='/hw_redux/users/' element={<UsersPage />} />
        <Route path='/hw_redux/login/' element={<SignInPage />} />
        <Route path='/hw_redux/register/' element={<SignUpPage />} />
        <Route path='/hw_redux/recovery/' element={<ForgetPassPage />} />
      </Routes>
    </div>
  );
}

export default App;

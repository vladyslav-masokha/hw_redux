import React from 'react';
import './ThemeSwitcher.scss';
import {connect, useDispatch, useSelector} from 'react-redux';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {changeTheme} from '../../redux/slices/themeSlice';

/**
 * @return {string} ThemeSwitcher.
 */
function ThemeSwitcher() {
  const theme = useSelector((state) => state.themeSlice.theme);
  const dispatch = useDispatch();
  return (
    <button
      className='changeThemeBtn'
      onClick={() => dispatch(changeTheme())}>
      {/* theme icon */}
      {theme === 'dark' ?
      (
        <>
          <FontAwesomeIcon icon={faSun} />
          <p>{theme}</p>
        </>
      ) :
      (
        <>
          <FontAwesomeIcon icon={faMoon} />
          <p>{theme}</p>
        </>
      )}
    </button>
  );
}

/**
 * Maps the state from the Redux store to the component's props.
 * @param {Object} state - The current state from the Redux store.
 * @return {object} An object containing the props derived from the state.
 */
function mapStateToProps(state) {
  return {
    theme: state.theme,
  };
}

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

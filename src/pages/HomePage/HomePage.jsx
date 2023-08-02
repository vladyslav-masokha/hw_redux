import React, {useEffect} from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom';

/**
 * @return {string} HomePage.
 */
function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === '/hw_redux/' ?
  navigate('/hw_redux/login/') :
  navigate('/hw_redux/error/');
  }, [[location.pathname, navigate]]);

  return (
    <section className='main'>
      <div className="wrapper">
        <div className="mainBody">
          <h1 className="title">Admin panel</h1>
          <h3 className='actions'>Actions:</h3>

          <div className="buttons">
            <button type='button' className='usrShow'>
              <Link to='/users'>Show all users</Link>
            </button>
            <button type='button' className='usrDel'>
               Delete all users
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

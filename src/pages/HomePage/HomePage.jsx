import React from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';

/**
 * @return {string} HomePage.
 */
function HomePage() {
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
            <Link to='/hw_redux/login/'>Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

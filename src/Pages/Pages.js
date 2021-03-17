import React from 'react';
import { Switch, useLocation, Route, Redirect } from 'react-router-dom';
import './Pages.css';
import { Link } from 'react-router-dom';

//pages
import S1 from '../AllSongs/S1';
import S2 from '../AllSongs/S2';

const { v4: uuidV4 } = require('uuid');

const Pages = (props) => {
  const location = useLocation();
  var room = uuidV4();

  return (
    <Switch location={location} key={location.pathname}>
      <Route path='/songs/genre1' component={S1} />
      <Route path='/songs/genre2' component={S2} />
      <div style={{ padding: '20px' }}>
        <div className='homeDiv'>
          <h1>Ready for Music?</h1>
          <div className='divider'></div>
          <p className='letsGoText'>
            <span style={{ fontFamily: 'Lobster, cursive', padding: '0px 2px' }}>SongColor</span>{' '}
            let's you restructure songs and experiment with sound. <br></br>
          </p>
          <Link to='/songs/genre1'>
            <button className='letsGoButton'>Try it now</button>
          </Link>
        </div>
      </div>
    </Switch>
  );
};
export default Pages;

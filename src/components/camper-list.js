import React from 'react';
import Camper from './camper';

export default ({camperList}) => (
  <ol>
    {camperList.map(({username, alltime, recent, img}) => 
      <li key={username}>
        <Camper
          username={username}
          alltime={alltime}
          recent={recent}
          img={img} />
      </li>
      )}
  </ol>
)

import React from 'react';

export default ({username, alltime, recent, img}, index) => (
  <div>
    <span className="username">{username}</span>
    <span className="alltime">{alltime}</span>
    <span className="recent">{recent}</span>
    <img className="user-image" src={img} alt={username} />
  </div>
)

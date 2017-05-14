import React from 'react';

const NewFriend = ({ name, avatar, likes}) => (
  <div className="event">
    <div className="label">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="content">
      <div className="summary">
        <a className="user">
          {name}
        </a> dodał Cie jako znajomego
        <div className="date">
          1 godzinę temu
        </div>
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> {likes} Likes
        </a>
      </div>
    </div>
  </div>
);

export default NewFriend;

import React from 'react';

const NewPost = ({ avatar, name, text, likes }) => (
  <div className="event">
    <div className="label">
      <img src={avatar} alt="avatar"/>
    </div>
    <div className="content">
      <div className="summary">
        <a>{name}</a> zapostował
        <div className="date">
          3 dni temu
        </div>
      </div>
      <div className="extra text">
        {text}
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> {likes} Likes
        </a>
      </div>
    </div>
  </div>
);

export default NewPost;

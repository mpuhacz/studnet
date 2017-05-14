import React from 'react';

const NewFriend = ({ name, avatar, likes, photos = []}) => (
  <div className="event">
    <div className="label">
      <img src={avatar} alt="avatar"/>
    </div>
    <div className="content">
      <div className="summary">
        <a>{name}</a> dodał <a>{photos.length} nowe zdjęcia</a>
        <div className="date">
          4 dni temu
        </div>
      </div>
      <div className="extra images">
      {
        photos.map((photo, index) => (
          <a href={photo} target="_blank" key={index}>
            <img src={photo} alt="Illustration" />
          </a>
        ))
      }
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> {likes} Like
        </a>
      </div>
    </div>
  </div>
);

export default NewFriend;

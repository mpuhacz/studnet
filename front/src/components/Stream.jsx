import React, { Component } from 'react';
import NewFriend from './Cards/NewFriend';
import NewPhotos from './Cards/NewPhotos';
import NewPost from './Cards/NewPost';
import Navbar from './Navbar';
import PostCreator from './PostCreator';

class Stream extends Component {
  render() {
    return (
      <div className="site">
        <Navbar />
        <div className="ui main text container site-content">
          <div className="ui feed">
            <NewFriend
              name="Jacek Placek"
              likes={-1}
              avatar={"https://semantic-ui.com/images/avatar/small/elliot.jpg"}
            />
            <NewPhotos
              name="Anka Niespodzianka"
              likes={7}
              avatar={"https://semantic-ui.com/images/avatar/small/jenny.jpg"}
              photos={[
                'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
                'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg'
              ]}
            />
            <NewFriend
              name="Jan Janowicz"
              likes={21}
              avatar={"https://semantic-ui.com/images/avatar/small/joe.jpg"}
            />
            <NewPost
              name="Jacek Placek"
              likes={23}
              avatar={"https://semantic-ui.com/images/avatar/small/elliot.jpg"}
              text="No witam wszystkich urzytkownikow"
            />
            <NewPhotos
              name="Jan Carbon"
              likes={-1}
              avatar={"https://semantic-ui.com/images/avatar/small/justen.jpg"}
              photos={[
                'http://www.elonka.com/kryptos/sanborn/KGBEnglish.jpg',
                'http://www.elonka.com/kryptos/sanborn/KGBEnglish.jpg'
              ]}
            />
            <NewPhotos
              name="Jacek Placek"
              likes={-1}
              avatar={"https://semantic-ui.com/images/avatar/small/justen.jpg"}
              photos={[
                'http://www.elonka.com/kryptos/sanborn/KGBEnglish.jpg',
                'http://www.elonka.com/kryptos/sanborn/KGBEnglish.jpg'
              ]}
            />
          </div>
        </div>
         <PostCreator />
      </div>
    );
  }
}

export default Stream;

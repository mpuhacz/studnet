import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewPhotos from './NewPhotos';

describe('<NewPhotos />', () => {
  it('renders NewPhotos without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewPhotos
      avatar="https://semantic-ui.com/images/avatar/small/justen.jpg"
      name="Name"
      likes={1}
      photos={[
        'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        'http://www.elonka.com/kryptos/sanborn/KGBEnglish.jpg',
      ]}
    />, div);
  });
});

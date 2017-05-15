import React, { Component } from 'react';

class PostCreator extends Component {
  render() {
    return (
      <div className="ui form footer">
        <div className="field">
          <textarea
            placeholder="Napisz coś od siebie..."
          >
          </textarea>
        </div>
      </div>
    )
  }
}

export default PostCreator;



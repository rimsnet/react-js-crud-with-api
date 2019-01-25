import React, { Component } from 'react';
import Post from './componets/Post';
import PostForm from './componets/PostForm';

import { Provider } from 'react-redux';
import store from './store';



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <Post />
        </div>
      </Provider>
    );
  }

}

export default App;

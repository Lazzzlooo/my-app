import React from 'react';
import {addPost} from "../../redux/news-reducer";
import {connect} from "react-redux";
import Posts from './Posts';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const PostsContainer = (props) => {
  return <Posts {...props} />
}

let mapStateToProps = (state) => {
  return {
    newsPage: state.newsPage
  }
}


export default compose(connect(mapStateToProps, {addPost}), withAuthRedirect)(PostsContainer);
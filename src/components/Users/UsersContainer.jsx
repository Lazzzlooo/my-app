import {connect} from 'react-redux';
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress, toggleFollowSuccess,
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <Users {...this.props} onPageChanged={this.onPageChanged} follow={this.props.follow}/>}</>
  }

}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    isFetching: state.usersPage.isFetching
  }
}

export default compose(connect(mapStateToProps, {
  toggleFollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  follow
}), withAuthRedirect)(UsersContainer);
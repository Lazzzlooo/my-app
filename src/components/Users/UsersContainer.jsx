import {connect} from 'react-redux';
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  toggleIsFetching
} from '../../redux/users-reducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      {withCredentials: false})
    .then(responsive => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(responsive.data.items);
      this.props.setTotalUsersCount(responsive.data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      {withCredentials: false})
    .then(responsive => {
      this.props.toggleIsFetching(false);

      this.props.setUsers(responsive.data.items);
      debugger
    })
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <Users totalUsersCount={this.props.totalUsersCount}
                 pageSize={this.props.pageSize}
                 users={this.props.users}
                 toggleFollow={this.props.toggleFollow}
                 onPageChanged={this.onPageChanged}
                 currentPage={this.props.currentPage}/>}


    </>
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
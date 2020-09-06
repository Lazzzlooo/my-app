import {connect} from 'react-redux';
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  toggleIsFetching
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {UserAPI} from '../../api/api';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    UserAPI.getUsers(pageNumber, this.props.pageSize)
    .then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
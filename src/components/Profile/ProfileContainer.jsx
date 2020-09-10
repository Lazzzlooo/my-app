import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
// import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11264;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}
// withAuthRedirect
export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  withRouter)(ProfileContainer)
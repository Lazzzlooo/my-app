import React from 'react';
import s from './ProfileCard.module.scss';

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  toggleActivateMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
        this.setState({
          status: this.props.status
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleActivateMode}
                   value={this.state.status} className={s.statusInput}/>
          : <p onClick={this.toggleActivateMode}
               className={s.status}>{this.props.status}</p>}
      </div>
    )
  }
}

import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import avatar from '../../img/avatar.png'


const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resposive => {
      props.setUsers(resposive.data.items);
    })
  }

  return (
    <section className={s.users}>
      <ul>
        {props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : avatar} alt="" width={75}/>
            </div>
            <div><button onClick={() => {props.toggleFollow(u.id)}}>{u.followed ? 'Unfollow' : 'Follow'}</button></div>
          </span>
          <span>
            <span>
              <span>{u.name}</span>
              <span>{u.status}</span>
              <div>{u.id}</div>
            </span>
            <span>
              {/*<div>{u.location.country}</div><div>{u.location.city}</div>*/}
            </span>
          </span>
        </div>)}

      </ul>
    </section>
  )
}

export default Users;
import React from 'react';
import s from './Users.module.scss';


const Users = (props) => {

debugger;
  return (
    <section className={s.users}>
      <ul>
        {props.users.map(u => <div key={u.id}>
          <span>
            <div>
            </div>
            <div><button onClick={() => {props.toggleFollow(u.id)}}>{u.followed? 'Unfollow' : 'Follow'}</button></div>
          </span>
          <span>
            <span>
              <div>{u.firstName} {u.lastName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div><div>{u.location.city}</div>
            </span>
          </span>
        </div>)}

      </ul>
    </section>
  )
}

export default Users;
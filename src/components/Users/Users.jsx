import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import avatar from '../../img/Photo.png'
import Button from '../Button/Button';


const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resposive => {
      props.setUsers(resposive.data.items);
    })
  }

  return (
    <section className={s.users}>
      {props.users.map(u => <ul key={u.id} className={s.list}>
          <li className={s.item}>
            <img src={u.photos.small != null ? u.photos.small : avatar} alt="" width={80}/>
          </li>
          <li className={s.item}>
            <p className={s.name}>{u.name}</p>
            <p>{u.status != null ? u.status : 'Hi what\'s up'}</p>
          </li>
          <li className={s.item}>
            <Button buttonValue={u.followed ? 'Unfollow' : 'Follow'} onClick={() => {props.toggleFollow(u.id)}}/>
          </li>
        </ul>
      )}
    </section>
  )
}

export default Users;
import React from 'react';
import s from './Users.module.scss';
import avatar from '../../img/Photo.png'
import Button from '../common/Button/Button';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const newPages = pages.map(p => <button key={p.id}
                                          onClick={() => {props.onPageChanged(p)}}
                                          className={props.usersPage.currentPage === p ? s.selected : undefined}>{p}</button>)
  .slice(0, 8)

  return (
    <section className={s.users}>
      <div className={s.buttons}>
        {newPages}
      </div>
      {props.usersPage.users.map(u => <ul key={u.id}
                                className={s.list}>
          <li className={s.item}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : avatar} alt="" width={80}/>
            </NavLink>
          </li>
          <li className={s.item}>
            <p className={s.name}>{u.name}</p>
            <p>{u.status != null ? u.status : 'Hi what\'s up'}</p>
          </li>
          <li className={s.item}>
            <Button disabled={props.usersPage.followingInProgress.some(id => id === u.id)}
                    buttonValue={u.followed ? 'Unfollow' : 'Follow'}
                    onClick={() => {props.follow(u.id, u.followed)}}/>
          </li>
        </ul>
      )}
    </section>
  )
}

export default Users;
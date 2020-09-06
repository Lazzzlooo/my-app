import React from 'react';
import s from './Users.module.scss';
import avatar from '../../img/Photo.png'
import Button from '../common/Button/Button';
import {NavLink} from 'react-router-dom';
import {UserAPI} from '../../api/api';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const newPages = pages.map(p => <button key={p.id}
                                          onClick={() => {props.onPageChanged(p)}}
                                          className={props.currentPage === p ? s.selected : undefined}>{p}</button>)
  .slice(0, 8)

  return (
    <section className={s.users}>
      <div className={s.buttons}>
        {newPages}
      </div>
      {props.users.map(u => <ul key={u.id}
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
            <Button buttonValue={u.followed ? 'Unfollow' : 'Follow'}
                    onClick={() => {
                      UserAPI.toggleFollow(u.followed, props.toggleFollow(u.id))
                    }}/>
          </li>
        </ul>
      )}
    </section>
  )
}

export default Users;
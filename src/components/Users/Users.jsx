import React from 'react';
import s from './Users.module.scss';
import avatar from '../../img/Photo.png'
import Button from '../Button/Button';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <section className={s.users}>
      <div className={s.buttons}>
        {pages.map(p => <button key={p.id}
                                onClick={() => {props.onPageChanged(p)}}
                                className={props.currentPage === p ? s.selected : undefined}>{p}</button>)}
      </div>
      {props.users.map(u => <ul key={u.id}
                                className={s.list}>
          <li className={s.item}>
            <img src={u.photos.small != null ? u.photos.small : avatar} alt="" width={80}/>
          </li>
          <li className={s.item}>
            <p className={s.name}>{u.name}</p>
            <p>{u.status != null ? u.status : 'Hi what\'s up'}</p>
          </li>
          <li className={s.item}>
            <Button buttonValue={u.followed ? 'Unfollow' : 'Follow'}
                    onClick={() => {props.toggleFollow(u.id)}}/>
          </li>
        </ul>
      )}
    </section>
  )
}

export default Users;
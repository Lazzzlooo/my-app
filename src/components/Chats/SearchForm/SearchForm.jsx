import React from 'react';
import s from './SearchForm.module.scss';


const SearchForm = () => {
  return (
      <div className={s.form}>
        <form action="" className={s.search_form}>
          <input type="text" placeholder={"Search"}/>
        </form>
      </div>
  )
}

export default SearchForm;
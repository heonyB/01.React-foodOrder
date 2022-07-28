import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>태헌 푸드</h1>
        <HeaderCartButton/>
      </header>
      <div>
        <img className={classes['main-image']} src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;

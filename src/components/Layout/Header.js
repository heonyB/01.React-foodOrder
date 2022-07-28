import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>태헌 푸드</h1>
        <button>Cart</button>
      </header>
      <div>
        <img className={classes['main-image']} src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
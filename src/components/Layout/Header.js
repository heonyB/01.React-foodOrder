import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>태헌 푸드</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div>
        <img className={classes['main-image']} src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;

import {Fragment} from 'react';
import meals from './../../assets/meals.jpeg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton showCartHandler={props.showCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="a table full of delicious food" />
            </div>
        </Fragment>
    )
}
export default Header;
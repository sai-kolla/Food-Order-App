
import mealsImage from '../../assets/meals.jpg';
import classes from './header.module.css';
import { HeaderCartButton } from './headerCartButton';

export const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Meals" />
            </div>
        </>
    )
}
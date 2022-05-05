import classes from './mealItem.module.css'
import { MealItemForm } from './mealItemForm'
import { CartContext } from '../../../store/cart-context'
import { useContext } from 'react'

export const MealItem = props => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = amount => {
    // console.log(props, "-------------------")
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>
          {props.name}
        </h3>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.price}>
          {price}
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

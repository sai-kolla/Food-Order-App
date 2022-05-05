import CartIcon from './cartIcon'
import classes from './headerCartButton.module.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../store/cart-context'

export const HeaderCartButton = props => {
  const [btnHigh, setBtnHigh] = useState(false)
  const cartCtx = useContext(CartContext)

  // console.log(cartCtx, "--------------")
  const { items } = cartCtx

  const cartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  const buttonClasses = `
        ${classes.button} ${btnHigh ? classes.bump : ''}
    `

  useEffect(
    () => {
      if (items.length === 0) {
        return
      }
      setBtnHigh(true)
      const timer = setTimeout(() => {
        setBtnHigh(false)
      }, 300)

      return () => {
        clearTimeout(timer)
      }
    },
    [items]
  );

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartItems}
      </span>
    </button>
  )
}

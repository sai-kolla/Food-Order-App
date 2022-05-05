import { Modal } from '../common/modal'
import classes from './cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import CartItem from './CartItem'

export const Cart = props => {
  
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const onAddItemHandler = item => {
    cartCtx.addItem(item)
  }

  const onRemoveItemHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item =>
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={onRemoveItemHandler.bind(null, item.id)}
          onAdd={onAddItemHandler.bind(null, item)}
        />
      )}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>
          {totalAmount}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

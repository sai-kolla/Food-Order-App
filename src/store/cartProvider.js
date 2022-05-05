import { CartContext } from './cart-context'
import { useReducer } from 'react'

const defCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'add') {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    )

    const existingCartItem = state.items[existingCartItemIndex]

    let updatedItems

    if (existingCartItem) {
      let updatedItem
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type === 'remove') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.id
    )

    const existingCartItem = state.items[existingCartItemIndex]
    const updatedAmount = state.totalAmount - existingCartItem.price

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defCartState
}

export const CartProvider = props => {
  const [cartState, setCartState] = useReducer(cartReducer, defCartState)

  const addItem = item => {
    setCartState({
      type: 'add',
      item: item
    })
  }

  const removeItem = id => {
    setCartState({
      type: 'remove',
      id: id
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

import classes from './mealItemForm.module.css'
import { Input } from '../../common/input'
import { useRef, useState } from 'react'

export const MealItemForm = props => {
  const [amountIsValid, setamountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    // console.log(amountInputRef.current, "-----------")
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    console.log(enteredAmountNumber, '+++++')

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

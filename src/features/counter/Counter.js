import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increase by value 10"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increase by 10
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increase by value 10"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          Decrease by 10
        </button>
      </div>
    </div>
  )
}
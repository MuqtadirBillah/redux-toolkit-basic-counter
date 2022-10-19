import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice'
import { getDataAll, updateApiData } from '../apiCalls/apiSlice'
import axios from 'axios'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const data = useSelector((state) => state.api.value)
  const dispatch = useDispatch()
  const apiUrl = "https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8"

  useEffect(()=>{
    dispatch(getDataAll({name: 'testing!!!'}))
    axios.get(apiUrl)
    .then(async (response)=>{
      console.log(response);
      await dispatch(updateApiData(response.data))
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

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
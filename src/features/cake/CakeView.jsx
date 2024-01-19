import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export default function CakeView() {
  // const [orderValue, setOrderValue] = useState(1);
  const [restockedValue, setRestockedValue] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Cakes - {numberOfCakes}</h2>
        {/* <input type="number" value={orderValue} onChange={(e) => setOrderValue(parseInt(e.target.value))}/> */}
        <button onClick={() => dispatch(ordered())}>Ordered Cakes</button>
        <input type="number" value={restockedValue} onChange={(e) => setRestockedValue(parseInt(e.target.value))} style={{width: "100px"}}/>
        <button onClick={() => dispatch(restocked(restockedValue))}>Restocked Cakes</button>
    </div>
  )
}

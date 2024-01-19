import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, reStocked } from './iceCreamSlice';

export default function IceCreamView() {
  const [restockedValue, setRestockedValue] = useState(1);
  const numberOfIceCreams = useSelector((state) => state.iceCream.numberOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of IceCreams - {numberOfIceCreams}</h2>
        <button onClick={() => dispatch(ordered())}>Ordered IceCreams</button>
        <input type="number" value={restockedValue} onChange={(e) => setRestockedValue(parseInt(e.target.value))} style={{width: "100px"}}/>
        <button onClick={() => dispatch(reStocked(restockedValue))}>Restocked IceCreams</button>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

export default function UsersView() {
  const user = useSelector((state) => state.users)
  console.log(user);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
        <h2>List of Users </h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {error.message}</div> : null}
        {!user.loading && user.user.length ? (
        <ul>
          {user.user.map((users) => (
            <li key={users.id}><strong>Name: </strong>{users.name} <strong>Email: </strong>{users.email} <strong>Address: </strong>{users.address.street} <strong>City: </strong>{users.address.city}</li>
          ))}
        </ul>
        ) : null}
    </div>
  )
}

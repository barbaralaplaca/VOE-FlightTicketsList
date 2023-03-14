// DELETE ITEM
// DELETE LIST

import React from 'react'
import { FlightItemDB } from '../types'
import './FlightSavedList.css'

type FlightsSavedListProps = {
  list: FlightItemDB[],
}

export const FlightsSavedList = (props: FlightsSavedListProps) => {
  const { list } = props;
  const deleteItem = (id: string) => {
    // const itemToDelete = list.find(item => item._id === id);
    fetch(`/api/flights/${id}`, { method: 'DELETE' });
  }

  return (
    <div className='db-list-container'>
      <h2 className='db-list-title'>Your Saved List</h2>
        {list.map(item => (
          <div key={item._id} className='db-list-item'>
            <p><b>Origin</b>{item.origin}</p>
            <p><b>Destination</b>{item.destination}</p>
            <p><b>Date</b>{item.date}</p>
            <p><b>Price</b>€ {item.price}</p>
            <button 
              onClick={() => deleteItem(item._id)}
              className='delete-item-button'>Delete</button>
            </div>
        ))}
    </div>
  )
}

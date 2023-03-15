// DELETE ITEM
// DELETE LIST

import React, { useEffect, useState } from 'react'
import { FlightItemDB } from '../types'
import './FlightSavedList.css'

type FlightsSavedListProps = {
  list: FlightItemDB[],
}

export const FlightsSavedList = (props: FlightsSavedListProps) => {
  const { list } = props;
  const [itemsList, setItemsList] = useState(list);

  useEffect(() => {
    }, [itemsList]);

  const deleteItem = (id: string) => {
    const itemToDelete = list.filter(item => item._id !== id);
    setItemsList(itemToDelete);
    fetch(`/api/flights/${id}`, { method: 'DELETE' });
  }

  return (
    <div className='db-list-container'>
      <h2 className='db-list-title'>Your Saved List</h2>
        {itemsList.map(item => (
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

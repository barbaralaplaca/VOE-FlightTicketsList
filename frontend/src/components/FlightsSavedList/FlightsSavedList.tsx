// DELETE ITEM
// DELETE LIST

import React from 'react'
import { FlightItemDB } from '../types'
import './FlightSavedList.css'

type FlightsSavedListProps = {
  list: FlightItemDB[],
}

export const FlightsSavedList = (props: FlightsSavedListProps) => {
  return (
    <div className='flight-container'>
        {props.list.map(item => (
          <div key={item._id} className='flight-item'>
            <p>{item.destination}</p>
            <p>{item.origin}</p>
            <p>{item.date}</p>
            <p>{item.price}</p>
            <button>Delete</button>
            </div>
        ))}
    </div>
  )
}

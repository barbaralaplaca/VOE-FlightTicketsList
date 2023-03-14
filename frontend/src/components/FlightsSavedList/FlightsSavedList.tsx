// DELETE ITEM
// DELETE LIST

import React from 'react'
import { FlightItemDB } from '../types'

type FlightsSavedListProps = {
  list: FlightItemDB[],
}

export const FlightsSavedList = (props: FlightsSavedListProps) => {
  return (
    <div>
        {props.list.map(item => (
          <div key={item._id}>
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

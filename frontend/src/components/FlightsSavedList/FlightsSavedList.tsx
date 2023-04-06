import { FlightItemDB } from '../types'
import './FlightSavedList.css'

type FlightsSavedListProps = {
  list: FlightItemDB[],
  deleteItem: (p: any) => void,
}

export const FlightsSavedList = (props: FlightsSavedListProps) => {
  const { list } = props;

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
              onClick={() => props.deleteItem(item._id)}
              className='delete-item-button'>Delete</button>
            </div>
        ))}
    </div>
  )
}

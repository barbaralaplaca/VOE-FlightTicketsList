import React from 'react'
import { FetchedData } from '../types'

type SerchResultsProps = {
    fetchedData: FetchedData[],
}

export const SearchResults = (props: SerchResultsProps) => {
  return (
    <div>
        {props.fetchedData.map(item => (
            <div key={item.IndirectQuoteDateTime + item.Id} className='flight-ticket-card'>
                <p>Destination {item.CountryName}</p>
                <p>Price: {item.DirectPrice}</p>
                <p>Non-stop: {item.Direct ? (<span>Yes</span>) : (<span>No</span>)}</p>
            </div>
        ))}
    </div>
  )
}

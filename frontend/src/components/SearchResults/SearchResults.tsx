import React, { useEffect, useState } from 'react'
import { FlightsSavedList } from '../FlightsSavedList/FlightsSavedList'
import { FetchedData, FlightItem, FlightItemDB} from '../types'
import './SearchResults.css'

type SerchResultsProps = {
    fetchedData: FetchedData[],
    flightList: FlightItemDB[],
}

export const SearchResults = (props: SerchResultsProps) => {
    const { fetchedData, flightList } = props;
    const [list, setList] = useState<FlightItemDB[]>(flightList);
    const [buttonMessage, setButtonMessage] = useState('Add Item to your list');
    
    const addItemToList = (index: number) => {
        const addItem = fetchedData.find(item => fetchedData.indexOf(item) === index);
        const itemToAdd: FlightItem = {
            origin: 'whatever',
            destination: addItem?.CountryName,
            date: addItem?.DirectQuoteDateTime,
            price: addItem?.DirectPrice,
        }

        fetch ('/api/flights', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemToAdd)
        }).then(response => {
            if (response.ok) {
                response.json()
                .then((data: FlightItemDB) => {
                    setList([...list, data]);
                })
                    // setButtonMessage('Added to list');
                // })
            }
        })
    }

  return (
    <div className='api-list-container'>
        {fetchedData.map((item, index) => (
            <div key={index} className='api-ticket-card'>
                <p><b>Destination</b> {item.CountryName}</p>
                <p><b>Price</b> {item.DirectPrice}</p>
                <p><b>Non-stop</b> {item.Direct ? (<span>Yes</span>) : (<span>No</span>)}</p>
                <button 
                    className='add-item-button'
                    onClick={() => addItemToList(index)}
                >{buttonMessage}</button>
            </div>
        ))}
        <FlightsSavedList list={list} />
    </div>
  )
}

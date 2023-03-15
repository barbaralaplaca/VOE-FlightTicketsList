import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlightsSavedList } from '../FlightsSavedList/FlightsSavedList'
import { FetchedData, FlightItem, FlightItemDB} from '../types'
import './SearchResults.css'

type SerchResultsProps = {
    fetchedData: FlightItem[],
    flightList: FlightItemDB[],
}

export const SearchResults = (props: SerchResultsProps) => {
    const { fetchedData, flightList } = props;
    const [list, setList] = useState<FlightItemDB[]>(flightList);
    const [searchResults, setSearchResults] = useState([]);
    const [buttonMessage, setButtonMessage] = useState('Add Item to your list');

    
    const addItemToList = (index: number) => {
        const addItem = fetchedData.find(item => fetchedData.indexOf(item) === index);
        const itemToAdd: FlightItem = {
            origin: addItem?.origin,
            destination: addItem?.destination,
            date: addItem?.date,
            price: addItem?.price,
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
            }
        })
    }

  return (
    <div className='api-list-container'>
        {fetchedData.map((item, index) => (
            <div key={index} className='api-ticket-card'>
                <p><b>Origin</b> {item.origin}</p>
                <p><b>Destination</b> {item.destination}</p>
                <p><b>Price</b> {item.price}</p>
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

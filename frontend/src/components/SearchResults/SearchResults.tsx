import React from 'react'
import { FetchedData, FlightItem } from '../types'
import './SearchResults.css'

type SerchResultsProps = {
    fetchedData: FetchedData[],
}

export const SearchResults = (props: SerchResultsProps) => {
    const { fetchedData } = props;
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
        // }).then(response => {
        //     if (response.ok) {
        //         response.json()
                // .then(data => addToList)
            })
    }

    //  e.preventDefault();
    //     if (firstName.match(/\W|[1-9]/) || lastName.match(/\W|[1-9]/)) {
    //         return setMessage('Only alphabetical characteres are allowed');
    //     } if (firstName === '' || lastName === '') {
    //         return setMessage('Mandatory field');
    //     }
    //     const name = firstName + " " + lastName;
    //     const developer = {name: name, bootcampId: bootcamp}
        
    //     fetch('http://localhost:3001/developers', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(developer)
    //     }).then((response) => {
    //         if (response.status === 200) {
    //             response.json()
    //             .then((data) => props.addToState(data.developer));
    //         }})
    //     setFirstName('');
    //     setLastName('');
    //     setMessage('Developer added');

  return (
    <div className='api-list-container'>
        {fetchedData.map((item, index) => (
            <div key={index} className='api-ticket-card'>
                <p><b>Destination</b> {item.CountryName}</p>
                <p><b>Price</b> {item.DirectPrice}</p>
                <p><b>Non-stop</b> {item.Direct ? (<span>Yes</span>) : (<span>No</span>)}</p>
                <button 
                    className='add-item-button'
                    onClick={() => addItemToList(index)}>Add Item to your list</button>
            </div>
        ))}
    </div>
  )
}

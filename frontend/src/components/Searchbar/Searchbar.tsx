import axios from 'axios';
import { useRef, useState } from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import { FlightItemDB } from '../types';
import './SearchBar.css'

type SearchBarProps = {
  flightsList: FlightItemDB[],
}

export const Searchbar = (props: SearchBarProps) => {
  const { flightsList } = props;
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const departureDateRef = useRef(null);

  const [search, setSearch] = useState([]);

    const postApi = () => {
        const options = {
          method: 'GET',
          url: process.env.REACT_APP_URL,
          params: {
            adults: '1',
            origin: 'AMS',
            destination: 'SHA',
            departureDate: '2023-08-11',
            currency: 'EUR',
            stops: '0,1,2',
            duration: '50',
            startFrom: '00:00',
            arriveTo: '23:59',
            returnStartFrom: '00:00',
            returnArriveTo: '23:59'
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPIHOST,
          }
        };

        axios
        .request(options)
        .then(response => setSearch(response.data.itineraries.results.map((item: any) => ({
          origin: item.legs[0].origin.name,
          destination: item.legs[0].destination.name,
          date: item.legs[0].departure,
          price: item.pricing_options[0].price.amount,
        }))))
        .catch(function (error) {
          console.error(error);
        });
      }

  return (
    <div>
      <div className='search-bar-container'>
        <h2>Where do you want to go?</h2>
          <div>
            <input
              type=""
              ref={originRef}
              placeholder='Origin'
              className='search-input-box'
            ></input>
            <input
              type='text'
              ref={destinationRef}
              placeholder='Destination'
              className='search-input-box'
            ></input>
            <input
              type='text'
              ref={departureDateRef}
              placeholder='Departure Date'
              className='search-input-box'
            ></input>
          </div>
          <div>
            <button 
                className='search-button'
                onClick={() => postApi()}
                >Search</button>
          </div>
       </div>

        <SearchResults 
          fetchedData={search}
          flightList={flightsList}
          />
    </div>
  )
}

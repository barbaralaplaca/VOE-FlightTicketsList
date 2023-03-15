import axios from 'axios';
import { useRef, useState } from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import { FlightItemDB } from '../types';

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
          url: 'https://skyscanner44.p.rapidapi.com/search-extended',
          params: {
            adults: '1',
            origin: 'MUC',
            destination: 'BER',
            departureDate: '2023-10-11',
            currency: 'EUR',
            stops: '0,1,2',
            duration: '50',
            startFrom: '00:00',
            arriveTo: '23:59',
            returnStartFrom: '00:00',
            returnArriveTo: '23:59'
          },
          headers: {
            'X-RapidAPI-Key': 'c40ee2892emshadb4df7ecff630cp15bf2djsn4cf8a7b05525',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
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
        <h2>Where do you want to go?</h2>

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
       
        <button 
            className='search-button'
            onClick={() => postApi()}
            >Search</button>

        <SearchResults 
          fetchedData={search}
          flightList={flightsList}
          />
    </div>
  )
}

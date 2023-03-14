import { useEffect, useState } from 'react'
import Select from 'react-select';
import { SearchResults } from '../SearchResults/SearchResults';
import { countryCode, FetchedData, FlightItemDB, Option } from '../types';

const mockData: FetchedData[] = [
    {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Slovenia","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:30","DirectQuoteDateTime":"2023-03-12T19:51:30"},
    {"Id":"LJUB","Direct":false,"Name":"Ljubljana","CountryName":"Paraguai","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:31","DirectQuoteDateTime":"2023-03-12T19:51:31"},
    {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Ecuador","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:32","DirectQuoteDateTime":"2023-03-12T19:51:32"}
];

type SearchBarProps = {
  flightsList: FlightItemDB[],
}

export const Searchbar = (props: SearchBarProps) => {
  const { flightsList } = props;
   const flightItem = {
      origin: '',
      destination: '',
      date: '',
     price: 0,
    }

  const [search, setSearch] = useState<FetchedData[]>([]);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [options, setOptions] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  // useEffect(() => {
  //   fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=&rows=300')
  //   .then(response => response.json())
  //   .then(data => data.records.map((element: countryCode) => ({
  //     value: element.fields.iso2_code, 
  //     label: element.fields.label_en})))
  //   .then(data => setOptions(data));
  // },[])

    const handleSubmit = async () => {
      console.log(origin);
      console.log(destination);
      console.log(departureDate);
      
    // const postApi = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2142ee9640mshcafa9d715ce760ep154a51jsn407eabf75a8e',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
      await fetch(`https://skyscanner44.p.rapidapi.com/fly-to-country?${destination}=SI&${origin}=MUC&departureDate=${departureDate}&returnDate=2023-07-21&currency=EUR&locale=en-GB&country=UK`, options)
    .then(response => response.json())
    .then(data => setSearch(data.PlacePrices))
    .then(data => console.log(data))
    .catch(err => console.error(err));
      }

    // const postApi = () => setSearch(mockData);

  return (
    <div>
        <h2>Where do you want to go?</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}  
            placeholder='Origin'
          ></input>
          <input
            type='text'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}  
            placeholder='Destination'
          ></input>
          <input
            type='text'
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}  
            placeholder='Departure Date'
          ></input>

          {/* <Select
            isMulti
            value={origin}
            // onChange={(e) => setOrigin(e.target.value)}
            isSearchable={isSearchable}
            options={options}
            /> */}
            {/* {options.map(item =>
            <option 
            key={item.value}
            value={item.value}>
              {item.label}
            </option>
            )} */}
       
        <button 
            className='search-button'
            // onClick={() => postApi()}
            >Search</button>
        </form>

        <SearchResults 
          fetchedData={search}
          flightList={flightsList}
          />
    </div>
  )
}

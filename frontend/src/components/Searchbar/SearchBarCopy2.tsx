import React from 'react'

export default function SearchBarCopy2() {
  return (
    <div>SearchBarCopy2</div>
  )
}


// import axios from 'axios';
// import { useRef, useState } from 'react'
// import { SearchResults } from '../SearchResults/SearchResults';
// import { FetchedData, FlightItemDB } from '../types';


// const mockData: FetchedData[] = [
//     {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Slovenia","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:30","DirectQuoteDateTime":"2023-03-12T19:51:30"},
//     {"Id":"LJUB","Direct":false,"Name":"Ljubljana","CountryName":"Paraguai","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:31","DirectQuoteDateTime":"2023-03-12T19:51:31"},
//     {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Ecuador","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:32","DirectQuoteDateTime":"2023-03-12T19:51:32"}
// ];

// type SearchBarProps = {
//   flightsList: FlightItemDB[],
// }

// export const Searchbar = (props: SearchBarProps) => {
//   const { flightsList } = props;
//   const originRef = useRef(null);
//   const destinationRef = useRef(null);
//   const departureDateRef = useRef(null);

//   const itemToSearch = {
//     origin: originRef,
//     destination: destinationRef,
//     departureDate: departureDateRef,
//   }

//   const [search, setSearch] = useState([]);
//   const [submit, setSubmit] = useState(search);

//   // const handleSubmit = () => {
//   //   // event.preventDefault();
//   //   setSubmit(itemToSearch);
//   // };
//   // const [isSearchable, setIsSearchable] = useState(true);
//   // const [options, setOptions] = useState([]);
  
//   // useEffect(() => {
//   //   fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=&rows=300')
//   //   .then(response => response.json())
//   //   .then(data => data.records.map((element: countryCode) => ({
//   //     value: element.fields.iso2_code, 
//   //     label: element.fields.label_en})))
//   //   .then(data => setOptions(data));
//   // },[])

//   // useEffect(() => {
//     const postApi = () => {
//         const options = {
//           method: 'GET',
//           url: 'https://skyscanner44.p.rapidapi.com/search-extended',
//           params: {
//             adults: '1',
//             origin: 'MUC',
//             destination: 'BER',
//             departureDate: '2023-10-11',
//             currency: 'EUR',
//             stops: '0,1,2',
//             duration: '50',
//             startFrom: '00:00',
//             arriveTo: '23:59',
//             returnStartFrom: '00:00',
//             returnArriveTo: '23:59'
//           },
//           headers: {
//             'X-RapidAPI-Key': 'c40ee2892emshadb4df7ecff630cp15bf2djsn4cf8a7b05525',
//             'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
//           }
//         };

//         axios
//         .request(options)
//         .then(response => setSearch(response.data.itineraries.results.map((item: any) => ({
//           origin: item.legs[0].origin.name,
//           destination: item.legs[0].destination.name,
//           date: item.legs[0].departure,
//           price: item.pricing_options[0].price.amount,
//         }))))
//         .catch(function (error) {
//           console.error(error);
//         });
//       }
  
//     // const postApi = () => setSearch(mockData);
//   return (
//     <div>
//         <h2>Where do you want to go?</h2>

//         {/* <form onSubmit={handleSubmit}> */}
//           <input
//             type=""
//             // value={origin}
//             // onChange={(e) => setOrigin(e.target.value)}  
//             ref={originRef}
//             placeholder='Origin'
//             className='search-input-box'
//           ></input>
//           <input
//             type='text'
//             // value=''
//             // onChange={(e) => setDestination(e.target.value)}  
//             ref={destinationRef}
//             placeholder='Destination'
//             className='search-input-box'
//           ></input>
//           <input
//             type='text'
//             // value=''
//             // onChange={(e) => setDepartureDate(e.target.value)}  
//             ref={departureDateRef}
//             placeholder='Departure Date'
//             className='search-input-box'
//           ></input>

//           {/* <Select
//             isMulti
//             value={origin}
//             // onChange={(e) => setOrigin(e.target.value)}
//             isSearchable={isSearchable}
//             options={options}
//             /> */}
//             {/* {options.map(item =>
//             <option 
//             key={item.value}
//             value={item.value}>
//               {item.label}
//             </option>
//             )} */}
       
//         <button 
//             className='search-button'
//             onClick={() => postApi()}
//             >Search</button>
//         {/* </form> */}

//         <SearchResults 
//           fetchedData={search}
//           flightList={flightsList}
//           />
//     </div>
//   )
// }

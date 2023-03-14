import { useEffect, useState } from 'react'
import { FlightsSavedList } from '../components/FlightsSavedList/FlightsSavedList'
import { Searchbar } from '../components/Searchbar/SearchBar'

export const Flights = () => {
  const [savedFlightsList, setSavedFlightsList] = useState([]);

  useEffect(() => {
    const fetchListDB = async () => {
      const response = await fetch('/api/flights');
      const json = await response.json();
      if (response.ok) {
        setSavedFlightsList(json);
      }
    }
    fetchListDB();
  },[])

  return (
    <div>
      <Searchbar />
      <FlightsSavedList list={savedFlightsList}/>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { FlightsSavedList } from '../components/FlightsSavedList/FlightsSavedList'
import { Searchbar } from '../components/Searchbar/Searchbar'

export const Flights = () => {
  const [savedFlightsList, setSavedFlightsList] = useState([]);

  useEffect(() => {
    const fetchListDB = async () => {
      const response = await fetch('/api/flights');
      const json = await response.json();
      console.log(json);
      
      
      if (response.ok) {
        setSavedFlightsList(json);
      }
    }
    fetchListDB();
  },[])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('/api/flights');
      const json = await response.json();
      console.log(json);
      
      
      if (response.ok) {
        setSavedFlightsList(json);
      }
    }
    fetchApi();
  },[])

  return (
    <div>
      <Searchbar />
      <FlightsSavedList list={savedFlightsList}/>
    </div>
  )
}

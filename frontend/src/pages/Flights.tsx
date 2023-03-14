import { useEffect, useState } from 'react'
import { Searchbar } from '../components/Searchbar/SearchBar'
import { FlightItemDB } from '../components/types'

export const Flights = () => {
  const [savedFlightsList, setSavedFlightsList] = useState<FlightItemDB[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListDB = async () => {
      const response = await fetch('/api/flights');
      const json = await response.json();
      if (response.ok) {
        setSavedFlightsList(json);
        setIsLoading(false);
      }
    }
    fetchListDB();
  },[])

  return (
    <div>
      { !isLoading &&
       <Searchbar 
        flightsList={savedFlightsList}
        />
      }
    </div>
  )
}

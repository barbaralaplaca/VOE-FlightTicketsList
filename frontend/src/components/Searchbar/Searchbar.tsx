import React, { useEffect, useState } from 'react'

export const Searchbar = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => { 
  // const postApi = async () => {
  const optionsPost = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '2142ee9640mshcafa9d715ce760ep154a51jsn407eabf75a8e',
		'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
	},
	body: '{"query":{"market":"UK","locale":"en-GB","currency":"EUR","queryLegs":[{"originPlaceId":{"iata":"LHR"},"destinationPlaceId":{"iata":"DXB"},"date":{"year":2023,"month":9,"day":20}}],"cabinClass":"CABIN_CLASS_ECONOMY","adults":2,"childrenAges":[3,9]}}'
  };

  const optionsGet = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2142ee9640mshcafa9d715ce760ep154a51jsn407eabf75a8e',
      'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
    }
  };

   fetch('https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create', optionsPost)
	.then(response => response.json())
	.then(response => response.sessionToken)
  .then(token => fetch(`https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/${token}`, optionsGet)
    .then(response => response.json())
    .then(response => console.log(response, 'this is answer from fetchAPI'))
    .catch(err => console.error(err)))
	.catch(err => console.error(err));

},[]);

  return (
    <div>
        <p>Aqui vai a Searchbar</p>
        <p>Na SearchBar eu tenho o State <b>EMPTY ARRAY</b> que ao pressionar o botao <b>SEARCH</b>
        altera o state para uma <b>LIST</b> com diversos <b>ITENS</b> cada um contendo: origin, destination, date and price.
        Ou seja, o state e o empty array que muda para a lista, os items vao ser o resultado de um map na lista. Cada item tem um botao 
        <b>ADD</b> que vai acionar o <b>POST METHOD</b></p>
    </div>
  )
}

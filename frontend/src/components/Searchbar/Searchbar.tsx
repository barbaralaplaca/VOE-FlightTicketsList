import { useState } from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import { FetchedData } from '../types';

const mockData: FetchedData[] = [
    {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Slovenia","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:30","DirectQuoteDateTime":"2023-03-12T19:51:30"},
    {"Id":"LJUB","Direct":false,"Name":"Ljubljana","CountryName":"Paraguai","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:31","DirectQuoteDateTime":"2023-03-12T19:51:31"},
    {"Id":"LJUB","Direct":true,"Name":"Ljubljana","CountryName":"Ecuador","ImageUrl":"https://content.skyscnr.com/119b73c5f7597401e98579c81634e8e5/GettyImages-495685019.jpg","DirectPrice":344,"IndirectPrice":240,"HotelUrl":"/hotels/search?entity_id=27544078&checkin=2023-07-01&checkout=2023-07-21&adults=1&rooms=1&locale=en-GB&market=UK","HotelPrice":20,"IndirectQuoteDateTime":"2023-03-12T19:51:32","DirectQuoteDateTime":"2023-03-12T19:51:32"}
];

export const Searchbar = () => {
  const [search, setSearch] = useState<FetchedData[]>([]);

    // const postApi = async () => {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '2142ee9640mshcafa9d715ce760ep154a51jsn407eabf75a8e',
    //         'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    //     }
    // };

    // fetch('https://skyscanner44.p.rapidapi.com/fly-to-country?destination=SI&origin=MUC&departureDate=2023-07-01&returnDate=2023-07-21&currency=EUR&locale=en-GB&country=UK', options)
	// .then(response => response.json())
	// .then(data => setSearch(data.PlacePrices))
	// .catch(err => console.error(err));
    // }

    const postApi = () => setSearch(mockData);

  return (
    <div>
        <p>Aqui vai a Searchbar</p>
        <p>Na SearchBar eu tenho o State <b>EMPTY ARRAY</b> que ao pressionar o botao <b>SEARCH</b>
        altera o state para uma <b>LIST</b> com diversos <b>ITENS</b> cada um contendo: origin, destination, date and price.
        Ou seja, o state e o empty array que muda para a lista, os items vao ser o resultado de um map na lista. Cada item tem um botao 
        <b>ADD</b> que vai acionar o <b>POST METHOD</b></p>
        <button onClick={() => postApi()}>Search</button>
        <SearchResults fetchedData={search} />
    </div>
  )
}

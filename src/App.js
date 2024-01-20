import {useEffect, useState} from "react";
import RickAndMortyService from "./API/RickAndMortyService";
import ListCard from "./components/list-card/ListCard";
import Modal from "./components/modal/Modal";

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    // async function getData() {
    //     const response = await axios.get(`https://rickandmortyapi.com/api/character/`);
    //     // console.log(response.data);
    //     setData(response.data.results);
    //     return response.data;
    // }

    async function getData() {
        const characters = await RickAndMortyService.getСharacters();
        console.log(characters);///////
        setData(characters.results);
    }

    // async function fetchData() {
    //     const weather = await WeatherService.getWeatherData(city, apiKey);
    //     const coordLon: number = weather.coord.lon;
    //     const coordLat: number = weather.coord.lat;
    //     const forecastRes = await WeatherService.getWeatherForecast(coordLat, coordLon, apiKey);
    //     setStatistics(forecastRes)
    // }

    console.log(data, 'DATA HERE');

    return (
        <main>
            {/*{data.length>0 ?  data.map(p=><div>{p.name}</div>) : 'loading'}*/}
            {/*{data?.map(p => <div key={p.id}>{p.name}</div>)}*/}

            {/*<ListCard data={data}/>*/}
            <Modal data={data}/>
        </main>
    );
}

export default App;

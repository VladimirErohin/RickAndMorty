import axios from "axios";

export default class RickAndMortyService {

    static async getСharacters(){
        const response = await axios.get(`https://rickandmortyapi.com/api/character/`)
        return response.data;
    }


    // static async getWeatherData(state: string, apiKey: string) {
    //     const response =
    //         await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`);
    //     return response.data
    // }
    //
    // static async getWeatherForecast(coordLat: number, coordLon: number, apiKey: string) {
    //     const response = await
    //         axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordLat}&lon=${coordLon}&appid=${apiKey}`)
    //     return response.data
    // }
}
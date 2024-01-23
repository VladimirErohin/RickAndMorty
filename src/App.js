import {useEffect} from "react";
import ListCard from "./components/list-card/ListCard";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters, setIsLoading} from "./redux/charactersSlice";
import Header from "./components/header/Header";
import {fetchPages} from "./redux/paginationSlice";
import Loader from "./components/loader/Loader";

function App() {
    const {isLoading} = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        getCharacters()
        dispatch(setIsLoading(false))
    }, []);

    function getCharacters() {
        dispatch(fetchCharacters());
        dispatch(fetchPages());
    }

    return (
        <main>
            {isLoading && <Loader/>}
            <Header/>
            <ListCard/>
        </main>
    );
}

export default App;

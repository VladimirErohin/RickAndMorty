import {useEffect} from "react";
import ListCard from "./components/list-card/ListCard";
import {useDispatch} from 'react-redux';
import {fetchCharacters} from "./redux/charactersSlice";
import Pagination from "./components/pagination/Pagination";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        //getData()
        getCharacters()

    }, []);

    function getCharacters() {
        dispatch(fetchCharacters());
    }

    return (
        <main>
            {/*{data.length>0 ?  data.map(p=><div>{p.name}</div>) : 'loading'}*/}
            {/*{data?.map(p => <div key={p.id}>{p.name}</div>)}*/}
            <Pagination/>
            <ListCard/>
        </main>
    );
}

export default App;

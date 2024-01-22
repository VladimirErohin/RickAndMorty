import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";


const initialState = {
    characters: [],
    currentPage:1,
    countPage: 0,
    person:{},
    isLoading: true,
    visibly: false,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (currentPage, name, thunkAPI) => {


        try {
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
            console.log(data.results)
            console.log(data.info.count)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }

        // if (data.length === 0) {
        //     return thunkAPI.rejectedWithValue('something went wrong');
        // }
        //
        // return thunkAPI.fulfillWithValue(data);
    }
);

// const initialState: PizzaSliceStateType = {
//     items: [],
//     status: Status.LOADING,  //loading | success | error
// };

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPerson: (state, action) => {
            state.person = action.payload
        },
        setVisibly: (state, action) => {
            state.visibly = action.payload
        },
    },

    extraReducers: builder => {
        // builder.addCase(fetchPizzas.pending, (state, action) => {
        //     state.status = Status.LOADING;
        //     state.items = [];
        // });
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.results;
            state.countPage = action.payload.info.count;
            //state.status = Status.SUCCESS;
        });
        // builder.addCase(fetchPizzas.rejected, (state, action) => {
        //     state.status = Status.ERROR;
        //     state.items = [];
        // });
    }
},);

console.log(charactersSlice)


export const selectorPizzasData = (state) => state.characters;

export const {setVisibly,setPerson,setCharacters,setCurrentPage,countPage} = charactersSlice.actions;

export default charactersSlice.reducer;

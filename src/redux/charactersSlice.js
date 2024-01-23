import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    characters: [],
    currentPage:2,
    countPage: 0,
    person:{},
    isLoading: true,
    visiblyPagination: false,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (testPage, name, thunkAPI) => {
        try {
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?page=${testPage}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

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
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },

    extraReducers: builder => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.results;
            state.countPage = action.payload.info.count;
        });
    }
},);

export const selectorPizzasData = (state) => state.characters;

export const {setIsLoading,setVisibly,setPerson,setCharacters,setCurrentPage,countPage} = charactersSlice.actions;

export default charactersSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";


const initialState = {
    characters: [],
    currentPage:1,
    countPage: 0,
    amount: 0,
    total: 0,
    isLoading: true,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (currentPage, name, thunkAPI) => {


        try {
            console.log(currentPage, '-page')
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
        setItems: (state, action) => {
            console.log(action)
            state.characters = action.payload;
            // state.countPage = action.payload;
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

export const {setItems,countPage} = charactersSlice.actions;

export default charactersSlice.reducer;


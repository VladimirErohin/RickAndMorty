import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";


const initialState = {
    page: 1,
    currentPage:1,
    countPage: 0,
    isLoadingPage: false,
    visiblyPagination: false,
};

export const fetchPages = createAsyncThunk(
    'pages/fetchPages',
    async (nextPage, name, thunkAPI) => {
        try {
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?page=${nextPage}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setVisiblyPagination: (state, action) => {
            state.visiblyPagination = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setCurrenPage: (state, action) => {
            state.currentPage = action.payload
        },
        setIsLoadingPage: (state, action) => {
            state.isLoadingPage = action.payload
        },
    },

    extraReducers: builder => {
        builder.addCase(fetchPages.fulfilled, (state, action) => {
            state.page = action.payload;
            state.isLoadingPage = false;
        });
    }
},);

console.log(paginationSlice)


export const selectorPaginationData = (state) => state.pagination;

export const {setIsLoadingPage, setVisiblyPagination, setPage, setCurrenPage} = paginationSlice.actions;

export default paginationSlice.reducer;

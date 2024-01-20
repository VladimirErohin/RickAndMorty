import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    characters: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

// export const fetchPizzas = createAsyncThunk<PizzaType[], SearchPizzaParamsType>(
//     'pizza/fetchPizzasStatus',
//         async (params) => {
//             const {order, sortBy, category, search, currentPage} = params;
//             // const response = await userAPI.fetchById(userId)
//             // return response.data
//             const {data} = await axios.get<PizzaType[]>(`https://63d2e6911780fd6ab9cf1692.mockapi.io/items?${category}${search}&page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}`)
//             return data;
//
//             // if (data.length === 0) {
//             //     return thunkAPI.rejectedWithValue('Пиццы пустые');
//             // }
//             //
//             // return thunkAPI.fulfillWithValue(data);
//         }
// );

// const initialState: PizzaSliceStateType = {
//     items: [],
//     status: Status.LOADING,  //loading | success | error
// };

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    },

    // extraReducers: builder => {
    //     builder.addCase(fetchPizzas.pending, (state, action) => {
    //         state.status = Status.LOADING;
    //         state.items = [];
    //     });
    //     builder.addCase(fetchPizzas.fulfilled, (state, action) => {
    //         state.items = action.payload;
    //         state.status = Status.SUCCESS;
    //     });
    //     builder.addCase(fetchPizzas.rejected, (state, action) => {
    //         state.status = Status.ERROR;
    //         state.items = [];
    //     });
    // }
},);

console.log(charactersSlice)

//export const selectorPizzasData = (state: RootState) => state.pizzas;

//export const {setItems} = charactersSlice.actions;

export default charactersSlice.reducer;


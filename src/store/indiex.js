import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggle(state) { state.showCounter = !state.showCounter },
        increase(state) { state.counter++ },
        increaseBy(state, action) { state.counter += action.payload },
        decrease(state) { state.counter-- }
    }
})

// const counterReducer = (state = intitalState, action) => {
//     if (action.type === 'toggle') {
//         return { counter: state.counter, showCounter: !state.showCounter }
//     } else if (action.type === 'increase') {
//         return { counter: state.counter + 1, showCounter: state.showCounter }
//     } else if (action.type === 'increaseBy') {
//         return { counter: state.counter + action.amount, showCounter: state.showCounter }
//     } else if (action.type === 'decrease') {
//         return { counter: state.counter - 1, showCounter: state.showCounter }
//     }
//     return intitalState;
// }

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
import { createStore } from "redux";

const intitalState = { counter: 0, showCounter: true };

const counterReducer = (state = intitalState, action) => {
    if (action.type === 'toggle') {
        return { counter: state.counter, showCounter: !state.showCounter }
    } else if (action.type === 'increase') {
        return { counter: state.counter + 1, showCounter: state.showCounter }
    } else if (action.type === 'increaseBy') {
        return { counter: state.counter + action.amount, showCounter: state.showCounter }
    } else if (action.type === 'decrease') {
        return { counter: state.counter - 1, showCounter: state.showCounter }
    }
    return intitalState;
}

const store = createStore(counterReducer);

export default store;
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/indiex';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.counter);
    const showCounter = useSelector(store => store.showCounter);
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };
    const incrementHandler = () => {
        dispatch(counterActions.increase());
    };
    const increaseHandler = () => {
        dispatch(counterActions.increaseBy(5));
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrease());
    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{count}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

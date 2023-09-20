import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from './store';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counter.counter);
  const showCounter =useSelector(state=>state.counter.showCounter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  function incrementBy2() {
      dispatch(counterActions.increase(2));
  }

  function increment() {
    dispatch(counterActions.increment());
}

  function decrement() {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter &&  <div className={classes.value}>{counter}</div>}
      
        <div className={classes.actions}>
        <button className={classes.btn} onClick={incrementBy2}>Increment By 2</button>
      <button className={classes.btn} onClick={decrement}>Decrement</button>
      <button className={classes.btn} onClick={increment}>Increment</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </main>
  );
};

export default Counter;
// We have to maintain the state , initial state , thta's why we sholuld not mutate the state . we can't do counter++;
// We might get into typo's , clashing into same identifiers, So we have to use unique identifiers and we can opt for react tool kit.
// In bigger apps the reducer funtiuon gets bigger and we might change state without wanting , we have to avoid that. 
// 17-18 vid

// 1.
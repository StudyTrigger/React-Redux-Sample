import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch(); 

  function handleMultiply() {
    dispatch({type:'MYCASE'});
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => handleMultiply()}>*</button>
    </div>
    </>
  )
}

export default App

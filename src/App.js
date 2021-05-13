import React, { useState } from 'react';
import useHistory from './useHistory';

const divStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  'flexDirection': 'column',
  'justifyContent': 'center',
  'alignItems': 'center'
};

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//       history: []
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(
//       {
//         count: this.state.count + 1,
//         history: [...this.state.history, this.state.count]
//       }
//     );
//   }

//   render() {
//     return (
//     <div style={divStyle}>
//       <div>Previous Numbers: {this.state.history}</div>
//       <div>Count: {this.state.count} </div>
//       <button onClick ={this.handleClick}>Add</button>
//     </div>
//     );
//   }
// }


// ----------------------------------------------------------------
// const Counter = (props) => {
//   // const [state, setState]
//   const [count, setCount] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handleClick = () => {
//     setHistory([...history, count]);
//     setCount((prevState) => prevState + 1);
//   }

//   return (
//     <div style={divStyle}>
//       <div>Previous Numbers: {history}</div>
//       <div>Count: {count} </div>
//       <button onClick={handleClick}>Add</button>
//     </div>
//   );
// };

// export default Counter;
// ---------------------------------------------------------------




export default () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useHistory();

  const handleAdd = () => {
    setHistory.add(count);
    setCount((prevState) => count + 1)
  };

  return (
    <div style={divStyle}>
      <div>Previous Numbers: {history}</div>
      <div>Count: {count} </div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={setHistory.remove}>Remove History</button>
      <button onClick={setHistory.mix}>Mix</button>
      <button onClick={setHistory.findTheMaximum}>Find Max</button>
    </div>
  );
}


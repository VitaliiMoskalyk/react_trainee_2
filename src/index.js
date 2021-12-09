import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';



// const element = React.createElement('div',{height:'200',background:'blue'}, 'ghbdhgfdg');


ReactDOM.render(<App/>, document.querySelector('#root'))

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

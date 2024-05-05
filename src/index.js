//OLD REACT VERSIONS UP TO V-17
//-------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   document.getElementById('root')
// );


//NEW REACT VERSIONS FROM V-18
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";


const root = createRoot(document.getElementById("root"));
root.render(<App />);

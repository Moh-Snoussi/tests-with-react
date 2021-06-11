import React from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import "./style.css"
import Gesetz from "./Gesetz";

const gesetze = Array(5).fill(null).map(() => (<Gesetz staat={"Hessen"} gesetz={'you should never kill'} />))

ReactDOM.render(
  <div>
    {gesetze}
  </div>,
  document.getElementById('root')
);

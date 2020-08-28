import React, { useState, useEffect } from "react";
import Axios from "axios";
import Advice from './Components/Advice';

function App() {
  const axios = require("axios");

  const [advice, setAdvice] = useState("");
  const [author, setAuthor] = useState("");

  let num;

  let f = ()=> {
    let figure = Math.floor(Math.random() * (217 - 1 + 1)) + 1; 
    num = figure;
    console.log()
    };
    f();

  function getAdvice() {


    
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        let advice = response.data[num].text;
        let author = response.data[num].author;
        if (author === null) {
          author = "Anonymous";
        }
        setAdvice(`"${advice}"`);
        setAuthor(author);
       // console.log(response.data[num]);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  useEffect(()=>{
    getAdvice();
  },[])


  return (
    <div>
  
      <Advice advice={advice} author={author} onClick={f()}></Advice>
    </div>
  );
}

export default App;

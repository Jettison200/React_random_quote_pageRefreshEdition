import React, { Component } from "react";
import Axios from "axios";
import Advice from './Components/Advice';

class App extends Component {

  state = {
    advice: "",
    author: ""
  };

  componentWillMount(){
    this.getAdvice();
  }

  randomNumberHandler = ()=> {
    let figure = Math.floor(Math.random() * (217 - 1 + 1)) + 1; 
    return figure;
    };

   getAdvice = ()=> {
  
    Axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        let advice = response.data[this.randomNumberHandler()].text;
        let author = response.data[this.randomNumberHandler()].author;
        if (author === null) {
          author = "Anonymous";
        }
        console.log(advice)
        this.setState({advice, author});
       // setAuthor(author);
       // console.log(response.data[num]);
      })
      .catch((error) => {
        console.log(error);
      });
  };



render(){
const {advice,author} = this.state;
  return (
    <div>
      <Advice  advice={advice} author={author} Click={this.getAdvice}></Advice>
    </div>
  );
}
}

export default App;

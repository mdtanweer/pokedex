import React, { Component } from 'react'
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import './App.css'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      items:'',
      loaded:false
    }
  }
  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.results,
          loaded: true,
        });
        console.log(json.results);
      });
  }
  render() {
    var {loaded,items}=this.state;
    if(!loaded){
      <div>Loding ...</div>
    }
    else{
      return (
        <div className='App'>
          <Header/>
          <div className='content'>
          {
            items.map((item,index)=> (
              <PokemonCard name={item.name} id={index+1}/>
            ))
          }
          </div>
        </div>
      )
    }
    
  }
}

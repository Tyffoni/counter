import React, { Component } from 'react'
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
   state = {
        counters: [
            {id:1, value: 0, item: "Milk"},
            {id:2, value: 0,item: "Egg"},
            {id:3, value: 0,item: "Bread"},
            {id:4, value: 0,item: "Carrot"}
        ]
      } 

      handleIncrement = counter =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})

      }

      handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState({counters})
      };

      handleReset = () => {
        this.state.counters.map(c => {
            c.value = 0;
            return c;
            
        })
        this.setState(this.state.counters)
      }

  render() { 
    return (
      <React.Fragment>
      <NavBar 
      totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className = "container" >
          <Counters 
          counters = {this.state.counters}
          onReset = {this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

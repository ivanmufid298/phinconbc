import React, { Component } from 'react'
import SubLifeCycle from './SubLifeCycle'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        fruit : "Apple",
        data : {},
        showPageSub : false,
        color: "blue" ,
      }
    }

    // Fetch data dari api -> disimpan ke state
    componentDidMount () {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                data : json
            })
        })

        this.timer = setTimeout(
            () => this.changeColor('red'),
            1000*3 
          )
    }

    changeFruit(value) {
        this.setState({
            fruit : value
        })
    }

    changeColor(newColor) {
        this.setState({
            color : newColor
        })
    }

  render() {
    console.log("Data : ", this.state.data);
    return (
      <div style={ {background: this.state.color} }>
        <h2>{this.state.fruit}</h2>

        {this.state.showPageSub && <SubLifeCycle changeFruit={(value) => this.changeFruit(value)} />}

        <button onClick={() => this.setState({showPageSub : !this.state.showPageSub})}>Show</button>
      </div>
    )
  }
}

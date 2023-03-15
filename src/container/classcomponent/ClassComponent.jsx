import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super (props)

        this.state = {
            name: "Ivan",
            age: 22,
            isMale: true,
        }
    }
  render() {
    
    const { name, age, isMale } = this.state

    // ======== Jika tidak menggunakan this.props "Iam feeling" ========
    // const { emotion }
    return (
      <div>
        <h1>My name is {name}</h1>
        <h2>I am {age} years old</h2>
        <h3>I am a {isMale ? "Male" : "Female"}</h3>

        <h4>I am feeling {this.props.emotion}</h4>
      </div>
    )
  }
}

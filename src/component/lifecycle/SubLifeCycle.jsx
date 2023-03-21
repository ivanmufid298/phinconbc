import React, { Component } from 'react'

export default class SubLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Biru"
      }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({ name: 'Merah' });
          }, 1000*1
          
          )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
  
        // Before
        document.getElementById('prev').innerHTML =
          'Warna sebelumnya: ' + prevState.name;
      }

    componentDidUpdate() {
  
        // After
        document.getElementById('new').innerHTML =
          'Warna Sekarang: ' + this.state.name;
      }


    componentWillUnmount() {
        this.props.changeFruit("Watermelon")
        clearTimeout(this.timer)
    }


  render() {
    return (
      <div>
        <div id="prev"></div>
        <div id="new"></div>
      </div>
    )
  }
}

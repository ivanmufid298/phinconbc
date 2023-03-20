import React, { Component } from 'react'
import "./propsparent.css"
import PropsChild from '../../component/propschild/PropsChild'

class PropsParent extends Component {
  // const [datas] = useState([
  //   {
  //     id: 1,
  //     title: 'List Ke-1'
  //   },
  //   {
  //     id: 2,
  //     title: 'List Ke-2'
  //   },
  //   {
  //     id: 3,
  //     title: 'List Ke-3'
  //   },
  // ])
  constructor () {
    super()
    this.state = {
      datas: [
        {
          id:1,
          title: "List ke-1"
        },
        {
          id:2,
          title: "List ke-2"
        },
        {
          id:2,
          title: "List ke-2"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
  
        
        <h1>
          <div className="card">
          <PropsChild datas={this.state.datas}/>
          </div>
        </h1>
              
      </div>
    )
  } 
}
export default PropsParent

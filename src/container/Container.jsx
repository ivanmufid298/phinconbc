import React from 'react'
import Array from './array/Array'
import Conditional from './if-else/Conditional'
import Logical from './logical/Logical'
import Loop1 from './looping/Loop1'
import Loop2 from './looping/Loop2'
import Loop3 from './looping/Loop3'
// import Map from './functionmap/Map'
import Operators from './operators/Operators'
import Relational from './relational/Relational'
// import ClassComponent from './classcomponent/ClassComponent'
import "./container.css"
import Navbar from '../component/navbar/Navbar'

const Container = () => {
  return (
    <div>
      <Navbar />
      <div className="grid-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='card grid-item1'>
        <h1 className='title-content'>
          Kondisi dimana x dibawah 20 tidak lulus
        </h1>
        <Conditional />
      </div>

      <div className="card2 grid">
      <div className='card grid-item2'>
        <h1 className='title-content'>
          Loop dengan for
        </h1>
        <Loop1 />
      </div>

      <div className='card grid-item3'>
        <h1 className='title-content'>
          Loop dengan for each
        </h1>
        <Loop2 />
      </div>

      <div className='card grid-item4'>
        <h1 className='title-content'>Loop dengan Map</h1>
        <Loop3 />
      </div>
      <div className='card grid-item5'>
        <h1 className='title-content'>
          Operators
        </h1>
          <Operators />
      </div>

      <div className='card grid-item6'>
        <h1 className='title-content'>
          Relasional
        </h1>
          <Relational />
      </div>

      <div className='card grid-item7'>
        <h1 className='title-content'>
          Logical
        </h1>
          <Logical />
      </div>

      <div className='card grid-item8'>
        <h1 className='title-content'>
          Array
        </h1>
          <Array />
      </div>
      </div>

      

      {/* <div className='card grid-item'>
        <h1 className='title-content'>
          Map
        </h1>
          <Map />
      </div> */}

      {/* <div className='card grid-item'>
          <ClassComponent />
      </div> */}

    </div>
    </div>
  )
}

export default Container
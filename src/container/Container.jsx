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

const Container = () => {
  return (
    <div className="grid-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='card grid-item'>
        <h1>
          Kondisi dimana x dibawah 20 tidak lulus
        </h1>
        <Conditional />
      </div>

      <div className='card grid-item'>
        <h1>
          Loop dengan for
        </h1>
        <Loop1 />
      </div>

      <div className='card grid-item'>
        <h1>
          Loop dengan for each
        </h1>
        <Loop2 />
      </div>

      <div className='card grid-item'>
        <h1>Loop dengan Map</h1>
        <Loop3 />
      </div>
      <div className='card grid-item'>
        <h1>
          Operators
        </h1>
          <Operators />
      </div>

      <div className='card grid-item'>
        <h1>
          Relasional
        </h1>
          <Relational />
      </div>

      <div className='card grid-item'>
        <h1>
          Logical
        </h1>
          <Logical />
      </div>

      <div className='card grid-item'>
        <h1>
          Array
        </h1>
          <Array />
      </div>

      {/* <div className='card grid-item'>
        <h1>
          Map
        </h1>
          <Map />
      </div> */}

      {/* <div className='card grid-item'>
          <ClassComponent />
      </div> */}

    </div>
  )
}

export default Container
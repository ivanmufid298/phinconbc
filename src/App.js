import React from 'react'
import Logical from './logical/Logical.jsx'
import Conditional from './if-else/Conditional.jsx'
import Loop1 from './looping/Loop1.jsx'
import Loop2 from './looping/Loop2.jsx'
import Loop3 from './looping/Loop3.jsx'
import Operators from './operators/Operators.jsx'
import Relational from './relational/Relational.jsx'
import Array from './array/Array.jsx'
import Map from './functionmap/Map.jsx'

const App = () => {
  return (
    <div>

      <div>
        <h1>
          Kondisi dimana x dibawah 20 tidak lulus
        </h1>
        <Conditional />
      </div>

      <div>
        <h1>
          Loop dengan for
        </h1>
        <Loop1 />
      </div>

      <div>
        <h1>
          Loop dengan for each
        </h1>
        <Loop2 />
      </div>

      <div>
        <h1>Loop dengan Map</h1>
        <Loop3 />
      </div>

      <div>
        <h1>
          Operators
        </h1>
          <Operators />
      </div>

      <div>
        <h1>
          Relasional
        </h1>
          <Relational />
      </div>

      <div>
        <h1>
          Logical
        </h1>
          <Logical />
      </div>

      <div>
        <h1>
          Array
        </h1>
          <Array />
      </div>

      <div>
        <h1>
          Map
        </h1>
          <Map />
      </div>
    </div>
  )
}

export default App
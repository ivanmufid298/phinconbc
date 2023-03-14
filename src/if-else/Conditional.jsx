import React, { useState } from 'react'
/* eslint-disable */
const Conditional = () => {
    const [msg] = useState(0)
    

    const displayMessage = () => {
    const msg = 10
        if(msg < 20 ) {
            return <p>Tidak Lulus</p>
        }
        else 
        if (msg > 20)
            return <p>Lulus</p>
    }
  return (
    <div>{(displayMessage())}</div>
  )
}

export default Conditional
import React, { useState } from 'react'
/* eslint-disable */
const Relational = () => {
    const [nilai] = useState(0)
    

    const displayMessage = () => {
    const nilai = 60
        if(nilai < 50 ) {
            return <p>Tidak Lulus</p>
        }
        else 
        if (nilai > 50)
            return <p>Lulus</p>
    }
  return (
    <div>{(displayMessage())}</div>
  )
}

export default Relational
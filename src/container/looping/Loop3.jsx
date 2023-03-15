import React from 'react'

function Loop3() {
    const products = ['orange', 'apple', 'watermelon'];
  
    const list = products.map(product => <li key={product}>{product}</li>)
  
    return (
      <div>
        {list}
      </div>
    )
  }

export default Loop3
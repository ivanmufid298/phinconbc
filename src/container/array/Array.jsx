import React from 'react'

const Array = () => {
    // const num = [1,2,3,4,5,6,7,8,9,10]

    // const slice = num.slices(2)
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const result = array.slice(0, 4)
    const result2 = array.slice(6, 9)
  return (
    <div>{(result)}{(result2)}</div>
  )
}

export default Array
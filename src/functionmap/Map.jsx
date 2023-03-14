import React from 'react'

const Map = () => {
    const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]
    const arr1 = [1,2,3,4,5]
    const arr2 = [6,7,8,9,10]

    const kelipatan = numbers.map((number) => number * 10);
    const reverse = arr2.concat(arr1)
    
  return (
    <div>
        <div>
            {(kelipatan)}
        </div>
        <div>
            {(reverse)}
        </div>
    </div>
  )
}

export default Map
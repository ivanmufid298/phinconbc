import React from 'react'

const Operators = () => {
    var x = 50


    var penjumlahan = x + 50
    var pengurangan = 150 - x
    var perkalian = x * 2
    var pembagian = 5000 / x

  return (
    <div>
        <div>
            Penjumlahan {(penjumlahan)}    
        </div>    
        <div>
            Pengurangan {(pengurangan)}
        </div>
        <div>
            Perkalian {(perkalian)}
        </div>
        <div>
            Pembagian {(pembagian)}
        </div>
    </div>
  )
}

export default Operators
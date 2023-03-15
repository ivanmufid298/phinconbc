/* With For-Each */

function Loop2() {
    const products = ['orange', 'apple', 'watermelon'];
  
    const list = []
  
    products.forEach((product) => {
      list.push(<li>{product}</li>)
    })
  
    return (
      <div>
        {list}
      </div>
    )
  }
  

export default Loop2
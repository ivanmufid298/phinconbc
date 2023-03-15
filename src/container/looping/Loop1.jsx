/* eslint-disable */

/* With For */
function Loop1() {
  const products = ['orange','apple','watermelon']
  
  const list = []

  for (const [i, product] of products.entries()) {
    list.push(<li>{product}</li>)
  }

  return (
    <div>
      {list}
    </div>
  );
}


export default Loop1;

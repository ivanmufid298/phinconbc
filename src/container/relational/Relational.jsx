import React from 'react';
  
function Relational() {
   
 function SwitchCase(props) {
    switch(props.value) {
      case '100 > 50':
        return 'Lulus';
      case '100 /= 2':
        return 'Tidak sesuai';
      default:
        return '';
    }
  }
  
  return (
    <div>
  
        <SwitchCase value={'100 > 50'} />
  
    </div>
  );
}
    
export default Relational;
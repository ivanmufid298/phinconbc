import React from 'react'

function PropsChild(props) {
    return (
        <div>
            {props.datas.map(data => { 
                return (
                    <h1>{data.title}</h1>
                )
            })}
        </div>  
    );
}


export default PropsChild
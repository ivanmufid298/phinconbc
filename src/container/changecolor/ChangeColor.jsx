import React, { useState, useEffect } from 'react'
import "./changecolor.css"

const ChangeColor = () => {
    const [color, setColor] = useState("blue")
    const click = color => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    const [titletext, setTitleText] = useState("Blue")
    const changeText = (text) => setTitleText(text)
    
  return (
    <div>
        <button onClick={() => {click("yellow") ; changeText("yellow")}}>{titletext}</button>
    </div>
  )
}

export default ChangeColor
import React, { useState } from 'react'

const Events = () => {

    const [color, setColor] = useState("");

    const HandleMouseOver = (e) =>{
        setColor(e.target.className);
        
    }
    return (
        <>
            <div className='container-fluid row'>
                <div id='1' className=' bg-danger' style={{ height: 300, width: 300 }} onMouseOver={HandleMouseOver}></div>
                <div id='2' className=' bg-primary' style={{ height: 300, width: 300 }} onMouseOver={HandleMouseOver}></div>
                <div id='3' className=' bg-success' style={{ height: 300, width: 300 }} onMouseOver={HandleMouseOver}></div>
            </div>
            <h3 className={color}  >This is a text that changes color</h3>
        </>
    )
}

export { Events }

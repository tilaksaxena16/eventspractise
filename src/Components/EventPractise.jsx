import React from 'react'
import { useState } from "react"


const EventPractise = () => {

    const [styleObject, setStyleObject] = useState({ 'position': '', 'top': '', 'left': '' })

    const handleMouseMove = (e) =>{
        setStyleObject({
            "position": "fixed",
            "top": e.clientY + "px",
            "left": e.clientX + "px"
        })
    }

        return (
            <>
                <div onMouseMove={handleMouseMove} className="container-fluid">
                    <div className="mt-4" style={{ height: '1000px' }}>
                        <p>move mouse pointer to test</p>
                    </div>
                    <img style={styleObject} src="images/Indiaflag.gif" width="50" height="50" />
                </div>
            </>
        )
}


export { EventPractise }
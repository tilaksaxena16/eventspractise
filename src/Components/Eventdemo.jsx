import React from 'react'
import { useState } from "react"
import { useEffect } from "react";


const Eventdemo = () => {
    const [warn, setWarn] = useState('');
    const [userName, setUserName] = useState('');

    function handleFocus() {
        setWarn("Name in Block Letters only");
    }
    function handleBlur(e) {
        setWarn("");
        setUserName(userName.toUpperCase());
    }
    function handleUserChange(e) {
        setUserName(e.target.value);
    }

    return (
        <>
            <div className="container-fluid">
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleUserChange} value={userName} onFocus={handleFocus} onBlur={handleBlur} /></dd>
                    <dd>{warn}</dd>
                </dl>
            </div>
        </>
    )
}

export { Eventdemo }
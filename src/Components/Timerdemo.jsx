import React from 'react'
import { useEffect, useState } from "react";

const Timerdemo = () => {

    const [loadingContainer, setLoadingContainer] = useState({ 'display': 'none' });
    const [imageContainer, setImageContainer] = useState({ 'display': 'none' });
    const [btnContainer, setbtnContainer] = useState({ 'display': 'block' });
    const [count, setCount] = useState(0);
    var i = 0;
    function LoadingStatus() {
        i++;
        setCount(i);
        if (i == 100) {
            setLoadingContainer({ 'display': 'none' });
            setImageContainer({ 'display': 'block' });
        }
    }
    function handleLoadClick() {
        setInterval(LoadingStatus, 200);
        setbtnContainer({ 'display': 'none' });
        setLoadingContainer({ 'display': 'block' });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                    <div style={btnContainer}>
                        <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
                    </div>
                    <div style={loadingContainer} className="text-center">
                        <progress style={{ 'width': '300px' }} min="1" max="100" value={count}></progress>
                        <p>Loading - {count} % Completed</p>
                    </div>
                    <div style={imageContainer}>
                        <img src="images/m1.jpg" width="200" height="300" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Timerdemo }
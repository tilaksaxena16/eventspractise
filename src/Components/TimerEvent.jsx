import React, { useEffect, useState } from 'react';
import "./TimerEvent.css";
import axios from 'axios';

const TimerEvent = () => {

    const [products, setProducts] = useState([]);
    const [rangeChange, setRangeChange] = useState(0);
    const [isRunning, setIsRunning]= useState(true);



    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            setProducts(response.data)
        })

    },[]);

    const HandleRangeChange = (e) =>{
        setRangeChange(Number.parseInt(e.target.value));

    }

    // useEffect(() => {
    //     if(isRunning){
    //         const interval = setInterval(() => {
    //             setRangeChange((prevSlide)=> (prevSlide===products.length-1)?0:prevSlide+1);
    //         }, 2000);
    //         return () => {
    //             clearInterval(interval);
    //           };
    //     }
    // }, [isRunning,products.length]);

    const PlayStatus = () =>{

        
    }

    const handlePlayClick = () =>{



        
    }

    const handlePauseClick = () =>{


    }

    return (
        <>
            <div className='container-fluid col-10 d-flex flex-column mt-2 '>
                <div className='box'>
                    {
                        products.map((product)=>
                            <div key={product.id}>
                                <img src={product.image} alt="images" width={"1050px"} height={"480px"} style={{overflow:"visible"}} /> 
                            </div>
                        )
                    }
                </div>
                <div className='d-flex justify-content-center mt-2 flex-column align-items-center'>
                    <div className='mt-3'>
                        <input style={{ width: "250px" }} type='range' value={rangeChange} onChange={HandleRangeChange}  min="0" max="10"/>
                    </div>
                    <div className='mt-2'>
                        <button  onClick={handlePlayClick} className='btn btn-success me-2'><span className="bi bi-play-fill me-1"></span>Play</button>
                        <button onClick={handlePauseClick} className='btn btn-danger'><span className="bi bi-pause-fill me-1"></span>Pause</button>
                    </div>
                </div>

            </div>



        </>
    )
}

export { TimerEvent }
import { useEffect } from "react";
import { useState } from "react"
import "./TimerEvent.css";
import axios from "axios";


const TimerEvent = () =>{
    const[products, setProduct] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const[isRunning, setIsRunning]= useState(true);
    const[btnTxt, setBtnTxt]= useState('Pause');
    const[btnIcon, setBtnIcon]= useState(<span class="bi bi-pause"></span>)
    const [previousSlide] = useState(0);
    
    function GetProduct(url){
        axios.get(url)
        .then(response=>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
        GetProduct("http://fakestoreapi.com/products");
    },[])
    function HandleRangeChange(e){
        setCurrentSlide(Number.parseInt(e.target.value));
    }

    useEffect(() => {
        if(isRunning){
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide)=> (prevSlide===products.length-1)?0:prevSlide+1);
            }, 2000);
            return () => {
                clearInterval(interval);
              };
        }
    }, [isRunning,products.length]);
      
    function handleClickPrev(){
        setCurrentSlide((prevSlide)=>(prevSlide===0?products.length-1:prevSlide-1));
    }
    function handleClickNext(){
        setCurrentSlide((prevSlide)=> (prevSlide===products.length-1)?0:prevSlide+1);
    }
    function HandlePlayPause(){
        if(isRunning){
            setIsRunning(false);
            setBtnTxt('Play');
            setBtnIcon(<span class="bi bi-play-fill"></span>);
        }else{
            setIsRunning(true);
            setBtnTxt('Pause');
            setBtnIcon(<span class="bi bi-pause-fill"></span>);
        }
    }

    return(
        <div className="container-fluid">
            <div style={{textAlign:'center'}}><h1>SlideBox with Play and Pause button</h1></div>
            <div className="box" style={{borderRadius:'20px', boxShadow:'3px 3px 3px black',height:'400px', width:'800px',margin:'auto' ,marginTop:'100px', border:'2px solid'}}>
                {
                    products.map((product, index) =>
                        <div key={product.id} className={`slide ${index === currentSlide ? "active" : ""}`} style={{opacity: index === currentSlide || index === previousSlide ? 1 : 0,}}>
                            <img src={product.image} alt="Images" height={'400px'} width={'500px'} style={{padding:'50px', marginLeft:'140px'}}/>
                        </div>
                    )
                }
            </div>
            <div className="foot d-flex" style={{margin:'auto',flexDirection:'column', alignItems:'center'}}>
                <input type="range" style={{'width':'800px', marginTop:'10px'}} value={currentSlide} min='0' max={products.length-1} onChange={HandleRangeChange} />
                <div className="buttons mt-2">
                    <button className="btn btn-primary me-4" type="button" onClick={handleClickPrev}><i className="bi bi-skip-backward-fill"></i></button>
                    <button className="btn btn-danger" style={{width:'100px'}} onClick={HandlePlayPause}>{btnIcon}{btnTxt}</button>
                    <button className="btn btn-primary ms-4" type="button" onClick={handleClickNext}><i className="bi bi-fast-forward-fill"></i></button>
                </div>
                
            </div>
        </div>
    )
}

export { TimerEvent };
import React from 'react'
import { useState } from "react"

const Emical = () => {

    const [amount, setAmount] = useState(10000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }
    function handleYearChange(e) {
        setYears(e.target.value);
    }
    function handleRateChange(e) {
        setRate(e.target.value);
    }

    function handleCalculateClick() {
        var P = amount;
        var r = rate / 12 / 100;
        var n = years * 12;
        var emi = P * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;
        setEmi(emi);
    }
    return (
        <>
            <div className="container-fluid">
                <h3>EMI Calculator</h3>
                <div className="border border-dark p-4">
                    <div className="row mb-2">
                        <div className="col">
                            Amount you need &#8377; <input type="text" value={amount} />
                        </div>
                        <div className="col">
                            for <input type="text" size="2" value={years} /> years
                        </div>
                        <div className="col">
                            Interest rate <input type="text" value={rate} size="4" /> %
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">&#8377; 10,000 </span>
                                <input type="range" onChange={handleAmountChange} min="10000" max="1000000" value={amount} style={{ width: '170px' }} />
                                <span className="input-group-text">&#8377; 10,00,000</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">1 </span>
                                <input type="range" onChange={handleYearChange} min="1" max="5" value={years} style={{ width: '200px' }} />
                                <span className="input-group-text">5</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text"> 10.45 </span>
                                <input type="range" onChange={handleRateChange} step="0.01" min="10.45" max="18.45" value={rate} style={{ width: '200px' }} />
                                <span className="input-group-text"> 18.45</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                        </div>
                    </div>
                </div>
                <p className="text-center">Your Monthly Installment Amount is  <b> &#8377; {Math.round(emi)}</b></p>
            </div>
        </>
    )
}

export { Emical }
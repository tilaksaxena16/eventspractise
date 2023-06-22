import React from 'react'
import { useState } from "react"

const Regdemo = () => {
    const [mobileFormat, setMobileFormat] = useState(/ /);
    const [toolTip, setTooltip] = useState('');
    const [yourMobile, setYourMobile] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function handleCountryChange(e) {
        switch (e.target.value) {
            case "India":
                setMobileFormat(/\+91\d{10}/);
                setTooltip("India +91 and 10 digits");
                break;
            case "US":
                setMobileFormat(/\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/);
                setTooltip("US : +(1)(425) 555-0100");
                break;
            case "UK":
                setMobileFormat(/\+\(44\)\(\d{2}\)\s\d{4}\s\d{4}/);
                setTooltip("UK :+(44)(20) 1234 5678");
                break;
            default:
                setMobileFormat(/ /);
                setTooltip("Please Select Your Country");
                break;
        }
    }

    function handleMobileChange(e) {
        setYourMobile(e.target.value);
    }

    function handleVerifyClick() {
        if (yourMobile.match(mobileFormat)) {
            document.write("<h2>Registered Successfully..</h2>");
        } else {
            setErrorMsg(`Invalid Mobile : ${toolTip}`);
        }
    }
    return (
        <>
            <div className="container-fluid">
                <h3>Verify Your Mobile</h3>
                <dl className="w-25">
                    <dt>Select Country</dt>
                    <dd>
                        <select onChange={handleCountryChange} className="form-select">
                            <option value="-1">Select Your Country</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                        </select>
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" onChange={handleMobileChange} placeholder={toolTip} className="form-control" />
                    </dd>
                    <dd className="text-danger">{errorMsg}</dd>
                    <button onClick={handleVerifyClick} className="btn btn-primary w-100">Verify</button>
                </dl>
            </div>



        </>
    )
}

export { Regdemo }
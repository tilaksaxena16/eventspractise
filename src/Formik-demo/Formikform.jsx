import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";


const Formikform = () => {

    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": 0,
            "Mobile": "",
            "City": ""
        },

        validationSchema: yup.object({
            "UserName": yup.string().required('Name Required').min(4, 'Name too short'),
            "Age": yup.number().required(),
            "Mobile": yup.string().matches(/\+91\d{10}/, "Invalid Mobile").required('Mobile Required')
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <>
            <div className="container-fluid">
                <h2>Register User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName" /></dd>
                        <dd className="text-danger">{formik.errors.UserName}</dd>
                        <dt>Age</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                        <dd className="text-danger">{formik.errors.Age}</dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                        <dd className="text-danger">{formik.errors.Mobile}</dd>
                        <dt>City</dt>
                        <dd>
                            <select name="City" onChange={formik.handleChange}>
                                <option value="-1">Choose City</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyd">Hyd</option>
                            </select>
                        </dd>
                        <dd className="text-danger"></dd>
                    </dl>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    )
}

export { Formikform }
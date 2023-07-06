import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const Formikproj = () => {
    return (
        <>
            <div className="container-fluid">
                <h3>Register User</h3>
                <Formik
                    initialValues={{
                        "UserName": "",
                        "Age": 0,
                        "Mobile": ""
                    }}

                    onSubmit={
                        (values) => {
                            alert(JSON.stringify(values));
                        }
                    }

                    validationSchema={
                        yup.object({
                            UserName: yup.string().required("Name Required").min(4, "Name too short").max(10, "Name too long"),
                            Age: yup.number().required("Age Required"),
                            Mobile: yup.string().matches(/\+91\d{10}/, "Invalid Mobile")
                        })
                    }

                >
                    {
                        props =>
                            <Form className={(props.isValid) ? 'bg-success p-2' : 'bg-danger p-2'}>
                                <dl>
                                    <dt>User Name</dt>
                                    <dd><Field type="text" name="UserName" /></dd>
                                    <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                                    <dt>Age</dt>
                                    <dd><Field type="text" name="Age" /></dd>
                                    <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                                    <dt>Mobile</dt>
                                    <dd><Field type="text" name="Mobile" /></dd>
                                    <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                                </dl>
                                <button className="btn btn-primary" disabled={!props.isValid} >Register</button>
                                <button className="btn btn-success ms-2" style={{ display: (props.dirty) ? 'inline' : 'none' }} >Save</button>

                            </Form>
                    }
                </Formik>
            </div>
        </>
    )
}

export { Formikproj };
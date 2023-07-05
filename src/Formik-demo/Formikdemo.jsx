import React from 'react'
import { useFormik } from 'formik'

const Formikdemo = () => {

    const Formik = useFormik({
        initialValues: {
            UserName: "",
            Age: 0,
            Mobile: "",
            City: ""
        },

        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <>
            <div className='container-fluid' style={{width:"300px",height:"200px"}}>
                <h2 className='mb-4 mt-4'>Register User</h2>
                <form className='form' onSubmit={Formik.handleSubmit}>
                    <dl>
                        <dt className='form-floating'>User Name</dt>
                        <dd><input type='text' name='UserName' className='form-control' onChange={Formik.handleChange} /></dd>
                        <dt className='form-floating'>Age</dt>
                        <dd><input type='number' name='Age' className='form-control' onChange={Formik.handleChange} /></dd>
                        <dt className='form-floating'>Mobile</dt>
                        <dd><input type='number' name='Mobile' className='form-control' onChange={Formik.handleChange} /></dd>
                        <dt className='form-floating'>City</dt>
                        <dd>
                            <select name='City' className='form-select' onChange={Formik.handleChange}>
                                <option selected>Select City</option>
                                <option>Hyd</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                            </select>
                        </dd>
                    </dl>
                    <button className='btn btn-primary w-100'>Register</button>
                </form>
            </div>
        </>
    )
}

export { Formikdemo }
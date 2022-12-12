import React from 'react'

const signup = () => {
    return (

        <>

            <button type="button" className="btn btn-outline-primary ms-3 " data-bs-toggle="modal" data-bs-target="#signupModel">
                <span className='fa-solid fa-right-to-bracket me-1 ms-2'> Register</span>
            </button>


            <div className="modal fade" id="signupModel" tabIndex="-1" aria-labelledby="signupModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="signupModelLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100  mb-4'>
                                <span className='fa fa-google'></span>
                                Signin  With  Google
                            </button>
                            <button className='btn btn-primary w-100  mb-3'>
                                <span className='fa fa-facebook'></span>
                                Signin With  Facebook
                            </button>
                            <form>
                            <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="name" className="form-control" id="example" aria-describedby="emailHelp"/>
                                        <div id="name" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary mb-7">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default signup

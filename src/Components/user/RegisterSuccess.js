import React from 'react'
import { Link } from 'react-router-dom'

const RegisterSuccess = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <h1>Profile created successfully</h1>
            </div>
            <Link
                to="/forgot"
                id="forgot_button"
                type="submit"
                className="btn btn-primary btn-block py-2 mt-4"
            >
                Forgot password?
            </Link>

        </div>
    )
}

export default RegisterSuccess


import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-content d-flex align-itens-center">
            <main className="form-signin m-auto">
                <form>
                    <h3 className='mb-4 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="White" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </h3>
                    
                    <h1 className="h3 mb-3 fw-normal text-center text-white">Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                            <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login;
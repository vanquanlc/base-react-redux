import { Link } from "react-router-dom";
import './Login.scss';
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";




const Login = ( ) => {
    return (
        <div className="login-container">
            <header className="login-header">
                Don't have an account yet?
                <button className="btn">Sign up</button>

            </header>
            <div className="login-content">
                <form className="form-login col-5">
                    <h3 className="login-content__heading">Typeform</h3>
                    <span className="login-content__welcome">Hello, who's this?</span>
                    <div className="form-group">
                        <label className="lable">Email</label> <br/>
                        <input className="col-12" type="email" autoComplete="username" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label className="lable">Password</label> <br/>
                        <input className="col-12"  type="password" autoComplete="current-password" placeholder="Enter your password"/>
                    </div>
                    <div className="forgot-password-container">
                        <Link>Forgot password?</Link>
                    </div>
                    <button type="submit">Log in</button>
                    <br/>
                    <span className="divide-login-form">-------------------OR--------------------</span>
                    <br/>
                    <Link className="btn btn-by-stand-other">
                        <FcGoogle />
                        <span>Log in with google</span>
                    </Link>
                    <br/>
                    <Link className="btn btn-by-stand-other">
                        <TfiMicrosoft />
                         <span>Log in with Microsoft</span>
                    </Link> 

                </form>
            </div>
        </div>
    )
}

export default Login;
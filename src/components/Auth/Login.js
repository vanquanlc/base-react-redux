import { Link, useNavigate, NavLink } from "react-router-dom";
import './Login.scss';
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";
import { useState } from "react";
import { postUserLogin } from "../../services/apiAuth";
import {  toast } from "react-toastify";




const Login = ( ) => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleClickChangePage = () => {
        navigate('../signup');
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = await postUserLogin(email, password);
        if(data.EC !== 0 ){
            toast.error(data.EM);
            return;
        }
        if(data.EC === 0){
            navigate('/')
            toast.success(data.EM);
        }
        
    }

    return (
        <div className="login-container">
            <header className="login-header">
                Don't have an account yet?
                <button onClick={()=> handleClickChangePage()}  className="btn">Sign up</button>

            </header>
            <div className="login-content">
                <form onSubmit={(event)=> handleSubmit(event)} className="form-login col-5">
                    <NavLink to='/' className="login-content__heading">Typeform</NavLink>
                    <br/>
                    <span className="login-content__welcome">Hello, who's this?</span>
                    <div className="form-group">
                        <label className="lable">Email</label> <br/>
                        <input onChange={(event) => setEmail(event.target.value)} className="col-12" type="email" autoComplete="username" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label className="lable">Password</label> <br/>
                        <input onChange={(event) => setPassword(event.target.value)} className="col-12"  type="password" autoComplete="current-password" placeholder="Enter your password"/>
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
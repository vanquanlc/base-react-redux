import { Link } from "react-router-dom";
import './Login.scss';
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";
import {  useNavigate, NavLink   } from 'react-router-dom';
import { useState } from "react";
import {postUserRegister} from '../../services/apiAuth'
import {  toast } from "react-toastify";
import _ from "lodash";

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const validatePassword = (password) => {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)
  
  }

const validateUsername = (username) =>  {
    if (username !== null || username !== '') {
      return true;
    }
  }





const SignUp = ( ) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClickChangePage = () => {
        navigate('../login');
      }

    const handleSubmit = async(event) => {
        event.preventDefault();
        //Validate
        const isValidateEmail = validateEmail(email);
        const isValidatePassword = validatePassword(password);
        const isValidateUsername = validateUsername(username);
        if (!isValidateEmail) {
          toast.error('Email invalidate');
          return;
        }
        if(!isValidateUsername){
          toast.error('Username cannot be blank');
          return;
        }
        if (!isValidatePassword) {
          toast.error('Password must consist of 8 characters containing at least one uppercase letter, lowercase letter and number');
          return;
        }
    

        //Action
        const data = await postUserRegister(email, username, password);
        if(data && data.EC !==0){
            toast.error(data.EM);
            return;
        }
        if (data && data.EC === 0) {
            navigate('/login');
            toast.success(data.EM)
        }
    }
    return (
        <div className="login-container">
            <header className="login-header">
                Don't have an account yet?
                <button onClick={() => handleClickChangePage()}className="btn">Log in</button>

            </header>
            <div className="login-content">
                <form onSubmit={(event)=> handleSubmit(event)} className="form-login col-5">
                    <NavLink to='/' className="login-content__heading">Typeform</NavLink>
                    <br/>
                    <span className="login-content__welcome">Hello, who's this?</span>
                    <div className="form-group">
                        <label className="lable">Email</label> <br/>
                        <input 
                            onChange={(event) => setEmail(event.target.value)} 
                            className="col-12" 
                            type="text" 
                            autoComplete="email" 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label className="lable">Username</label> <br/>
                        <input 
                            onChange={(event) => setUsername(event.target.value)} 
                            className="col-12" 
                            type="text" 
                            autoComplete="username" 
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group">
                        <label className="lable">Password</label> <br/>
                        <input 
                            onChange={(event) => setPassword(event.target.value)} 
                            className="col-12"  
                            type="password" 
                            autoComplete="current-password" 
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="forgot-password-container">
                        <Link>Forgot password?</Link>
                    </div>
                    <button type="submit">Sign Up</button>
                    <br/>
                    <span className="divide-login-form">-------------------OR--------------------</span>
                    <br/>
                    <Link className="btn btn-by-stand-other">
                        <FcGoogle />
                        <span>Sign up with google</span>
                    </Link>
                    <br/>
                    <Link className="btn btn-by-stand-other">
                        <TfiMicrosoft />
                         <span>Sign up with Microsoft</span>
                    </Link> 

                </form>
            </div>
        </div>
    )
}

export default SignUp;
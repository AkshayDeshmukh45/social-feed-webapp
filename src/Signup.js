import React, { useState } from 'react'
import { Form, Alert } from 'antd';
import Login from './Login';


export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);
    const [userInfo, setUserInfo] = useState(true);
    const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState(false);
    




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            setFlag(true);

        } else {
            setFlag(false);
            alert(
            localStorage.setItem("Email", JSON.stringify(email)),
            localStorage.setItem("Password", JSON.stringify(password))
            console.log("Saved in Local Storage");
            
            setLogin(!login)


        }

    }

    function handleClick() {
        setLogin(!login)
    }

    return (
        <>
            <nav className="navbar navbar-light">
                
                    <h4 className="btn btn-dark btn-lg btn-block"></h4>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        every Field is Mandatory!
                </Alert>
                }

            </form> : <Login />}
            </div> }
        </>
    )
}

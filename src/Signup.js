import React, { useState } from 'react'
import { Form, Alert } from 'antd';
import Login from './Login';


function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            alert(
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");
            
            setLogin(!login)


        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
                </div>
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
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                    <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                    <p><strong>Phone:</strong> XXXXXXXXXX09</p>
                    <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
                </div>}
        </>
    )
}

export default Signup;
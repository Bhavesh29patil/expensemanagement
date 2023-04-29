import React,{useState} from 'react'
import {Form,Input, message} from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
const Register = () => {

    const navigate = useNavigate();
    const [loading,setLoading]=useState(false);

    //form submit
    const submitHandler = async(values) => {
        try {
            console.log("hi")
            setLoading(true);
            console.log(values)
             await axios.post('/users/register',values)
            console.log(values)
            message.success('Registration Sucessfull')
            setLoading(false);  
            navigate('/Login');   

        } catch (error) {
            setLoading(false);
            message.error("invalid username and password"); 
        }
    }

  return (
    <>
     <div className='register-page'>
     
        <Form layout="vertical" onFinish={submitHandler}>
        <h1>REGISTER FORM</h1>
        <Form.Item label="Name" name="name">
            <Input/>
        </Form.Item>
        <Form.Item label="Email" name="email">
            <Input type='email'/>
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input type='password'/>
        </Form.Item>
        <div className='d-flex justify-content-between'>
            <Link to='/login'>Already registered ? click here to login</Link>
            <button className='btn btn-primary'>register</button>
        </div>

        </Form>
     </div>
    </>
  )
}

export default Register
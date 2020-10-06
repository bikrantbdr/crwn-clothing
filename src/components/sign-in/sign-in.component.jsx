import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handelSubmit = event=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handelChange =event=>{
        const {value,name} =event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit} >
                    <FormInput
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handelChange ={this.handelChange}
                    label='Email'
                    required/>
                    

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handelChange ={this.handelChange}
                    label='Password'
                    required/>
                    


                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;
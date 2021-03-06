import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handelSubmit = async event=>{
        event.preventDefault();
        const{email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password)
        }
        catch(error){
            console.log(error);
        }
        this.setState({email:'',password:''});
    }

    handelChange =event=>{
        const {value,name} =event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
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
                                
                    <div className="buttons">


                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;
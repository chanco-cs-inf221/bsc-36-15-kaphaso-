import React, {Component} from "react";
import {Link} from 'react-router-dom'


class SignUpForm extends Component{
constructor() {
    super();

    this.state = {
        email: '',
        password: '',
        name: '',
        hasAgreed:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
        [name]: value
    });
}

handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
}

render(){
    return(
        <div className = "FormCenter">
        <form onSubmit={this.handleSubmit}className = "FormFields">
        <div className = "FormField" >
        <label className = "FormField__Label"htmlFor = 'name' > Full Name </label>
        <input type = 'text'id = 'name'className = 'FormField__Input'placeholder = "Enter your full name"name = "name" 
        value={this.state.name} onChange={this.handleChange} > </input>
        </div>
        <div className = "FormField" >
        <label className = "FormField__Label" htmlFor = "password" > Password </label> 
        <input type = "password"id = "password" className = "FormField__Input" placeholder = "Enter your password" name = "password"
        value={this.state.password} onChange={this.handleChange}
        ></input>
    

       <div className = "FormField" >
        <label className = "FormField__Label"htmlFor = "email" > Email </label>
         <input type = "email"id = "email" className = "FormField__Input" placeholder = "Enter your email"name = " email"value={this.state.email} onChange={this.handleChange} > </input> </div>

            <div className = "FormField" >
            <label className = "FormField__CheckboxLabel" >
            <input className = "FormField__Checkbox"type = "checkbox"name = "has Agreed" > </input>
        I agree to all statements in <a href = ''className = "FormField__TermsLink" > Terms of service </a> </label> 
        </div>

            <div className = "FormField" >
            < button className = "FormField__Button mr-20" > Sign Up </button> <a href = "#"className = "FormField__Link" > Already a member </a> </div>
            </div>
         </form>
         </div>
    );
}
}

export default SignUpForm;
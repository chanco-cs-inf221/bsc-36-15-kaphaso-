import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm.js';
import SignInForm from './pages/SignInForm.js';

import './App.css';

class App extends Component {
  render(){
  return (
  <Router>
  <div className="App">
      <div className='App__Aside'></div>
      <div className='App__Form'>
      <div className='PageSwitcher'>
      <Link to="/sign-in" className = 'PageSwitcher__Item' >Sign In </Link>
      <Link to='/' className='PageSwitcher__Item PageSwitcher__Item--Active' >Sign Up </Link>
      </div>

      <div className="FormTitle">
      <Link to='/sign-in' className="FormTitle__Link">Sign In</Link> or   
      <Link to="/" className="FormTitle__Link--Active"> Sign Up</Link>
      </div>
      
      
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
         <div className="FormField">
           <label className="FormField__Label" htmlFor='name'>Full Name</label>
           <input type='text' id= 'name' className='FormField__Input' placeholder= "Enter your full name" name="name"></input>

           </div>
           
           <div className="FormField">
           <label className="FormField__Label" htmlFor="password">Password</label>
           <input type= "password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"></input>
           </div>

           <div className= "FormField">
           <label className="FormField__Label" htmlFor="email">Email</label>
           <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name=" email"></input>
           </div>
           
           
           <div className="FormField">
           <label className="FormField__CheckboxLabel">
           <input className="FormField__Checkbox" type="checkbox" name="has Agreed"></input>
           I agree to all statements in <a href='' className="FormField__TermsLink">Terms of service</a>
           </label>
           </div>

           <div className="FormField">
           <button className="FormField__Button mr-20">Sign Up</button>
           <a href="#" className="FormField__Link">Already a member</a>
           </div>
       </form>
       </div>
       <Route exact path = "/"Component = {SignUpForm}>
        </Route>
        
        <Route path="/sign-in">
        <h1>Sign In</h1>
        </Route>
     
      </div>
    </div>
    </Router>
  );
}
}

export default App;

import React from 'react';
import axios from "axios";
import Login from '../components/login/login';

class LoginContainer extends React.Component {

	  handleSubmit = (e) => {
	    e.preventDefault(); 
	    this.props.history.push('/home')
	  };

	 
	render() { 
		return (
			 <Login
		        handleSubmit={this.handleSubmit}
		      />
		);
	}
}


export default LoginContainer 
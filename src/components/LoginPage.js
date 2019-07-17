import React,{Component} from 'react';
import data from '../data/Data.json';
import {connect} from 'react-redux';
import * as loginActionCreater from '../actions/loginActionCreator';
import EmployeeDetails from './EmployeeDetails';
import './EmployeeDetails.css';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.userName !== data.username || this.state.password !== data.password){
            alert("Your credential is invalid. Please try with valid credential.");
        }else{
            this.props.login();
            this.setState({userName:'',
            password:''});
        }
    }

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User Name:
                        <input type="text" 
                        name="userName" 
                        value={this.state.userName} 
                        onChange={this.onChange} 
                        required
                        />
                    </label>
                    <label>
                        Password:
                        <input type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.onChange} 
                        required
                        />
                    </label>
                    <input type="submit" value="Login" />  
                </form>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.isLoginSuccess && data.user.map((user) => {
                            return (
                                <EmployeeDetails 
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                age={user.age}
                                gender={user.gender}
                                email={user.email}
                                phoneNo={user.phoneNo}
                                />  
                            )  
                        })}
                    </tbody>
                </table> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isLoginSuccess } = state
    return {
        isLoginSuccess: isLoginSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: () => dispatch(loginActionCreater.login()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
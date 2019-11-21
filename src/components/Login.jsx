import React, { Component } from 'react'
import {credentials} from '../db'
export default class Login extends Component {
    isLogin = localStorage.getItem('auth_token') || null;
    initialState ={
        user_email:"",
        user_password:""
    }
    constructor(props){
        super(props)
        this.state={
            ...this.initialState
        }
    }
    componentDidMount(){
    if(this.isLogin)
    this.props.history.push('/')
    }
    _validate=e=>{
        e.preventDefault();
        const {user_email,user_password} = this.state;
        const {username, password} = credentials;
        if(username===user_email && password === user_password){
            localStorage.setItem('auth_token',true);
            this.props.history.push('/')
        }
        else this.setState({error:true})
        
    }
    _onChange =e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    _reset=e=>{
        e.preventDefault();
        this.setState({...this.initialState})  
    }
    render() {
        return (
            <>
                {this.state.error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Invalid Email or password
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}
                <form className="col-6 offset-3">
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email"  name="user_email" onChange={e=>this._onChange(e)} value={this.state.user_email}className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name="user_password" onChange={e=>this._onChange(e)} value={this.state.user_password} className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={e => this._validate(e)}>Submit</button>
                    <button type="button" className="btn btn-danger" onClick={e => this._reset(e)}>Reset</button>
                </form>
            </>
        )
    }
}

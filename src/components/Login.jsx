import React, { Component } from 'react'
import { connect } from 'react-redux';
import {login} from '../actions';
import {Redirect} from  'react-router-dom'
 class Login extends Component {
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
        this.props.dispatch(login(user_email,user_password,this.cb))
    }
    cb =   (response) => {
      if(response)
      this.props.history.push('/');
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
                {this.props.error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
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
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" name="user_password" onChange={e=>this._onChange(e)} value={this.state.user_password} className="form-control" />
                    </div>
                    <div className="row offset-4">
                    <div className="col-3">
                    <button type="button" className="btn btn-primary" onClick={e => this._validate(e)}>Submit</button>
                    </div>
                    <div className="col-1 text-right">
                    <button type="button" className="btn btn-danger" onClick={e => this._reset(e)}>Reset</button>
                    </div>
                    </div>
                </form>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    error: state.userReducer.error,
    UserLogin: state.userReducer.UserLogin
});
export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Login);

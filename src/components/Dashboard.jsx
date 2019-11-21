import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getUsers} from '../actions' ;
import {Redirect} from 'react-router-dom';
class Dashboard extends Component {
     isLogin = localStorage.getItem('auth_token') || null;
    constructor(props){
        super(props)
        this.state= {
        }
    }
    componentDidMount(){
    this.props.dispatch(getUsers());
    }
    _logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('auth_token');
        this.props.history.push('/login')
    }
    render() {
        const {users} = this.props;
       
        return (
            <div>
                 {!this.isLogin && <Redirect to="/login" />}
                <div className="bg-dark text-right" style={{height:'50px',color:'white'}}>
                    <button type="button" className="btn btn-warning"onClick ={e=>this._logout(e)}>Logout</button>
                </div>
                {users&&users.length>0 &&
                <table  className="table table-striped">
                    <thead>
                    <tr key={users}>{Object.keys(users[0]).map(key=><th>{key}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                        
                        {users.map((user,index)=><tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                        </tr>)}
                    </tbody>
                </table>
    }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.userReducer.users
});
export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Dashboard);

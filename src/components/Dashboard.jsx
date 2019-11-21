import React, { Component } from 'react'
import {user as users} from '../db';
export default class Dashboard extends Component {
     isLogin = localStorage.getItem('auth_token') || null;
    constructor(props){
        super(props)
        this.state= {
        }
    }
    componentDidMount(){
        if(!this.isLogin)
            this.props.history.push('/login');
    }
    _logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('auth_token');
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <div className="bg-dark text-right" style={{height:'50px',color:'white'}}>
                    <button type="button" className="btn btn-warning"onClick ={e=>this._logout(e)}>Logout</button>
                </div>
                {users&&users.length>0 &&
                <table  className="table table-striped">
                    <thead>
                    <tr>{Object.keys(users[0]).map(key=><th>{key}</th>)}
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

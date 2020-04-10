import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


class Contact extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            redirectTo: false
        }
    }

    _deleteContact = () => {
        axios.delete('http://localhost:3000/api/contacts/'+this.props.contact._id)
             .then(() => {
                this.setState({
                    redirectTo: true
                })
             })
             .catch(
                 (error) => {
                     console.log({error})
                 }
             )
    }
    
    render() {
        console.log(this.props.contact._id)
        const { _id, lastName, firstName, phone } = this.props.contact
        if(this.state.redirectTo){
            return(
                <Redirect to="/contacts" />
            )
        } else {
            return(
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{phone}</td>
                    <td><Link to={`/edit-contact/${_id}`}><button className="btn btn-primary" >Edit</button></Link></td>
                    <td><button className="btn btn-danger" onClick={this._deleteContact}>Delete</button></td>
                </tr>
            )
        }
        
    }
}


export default Contact
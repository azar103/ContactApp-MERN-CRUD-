import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class ContactForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            lastName: '',
            firstName: '',
            phone: ''
        }
    }

    _handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    _handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    _handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    _postContact = (e) => {
          e.preventDefault();
          const lastName = this.state.lastName
          const firstName = this.state.firstName
          const phone = this.state.phone

          const contact = {
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              redirectTo: false
          }
          axios.post('http://localhost:3000/api/contacts', contact).then(
              () => {
                  this.setState({
                      redirectTo: true
                  })
              }
          )

          this.setState({ lastName: '', firstName: '', phone: '' })

    }

    render() {
        if(this.state.redirectTo){
            return(
                <Redirect to="/contacts" />
            )
        }
        else {
            return(
                <form className="col-sm-8 col-sm-offset-2" onSubmit={this._postContact}>
                    <div className="form-group">
                        <label htmlFor="firstName">
                             firstName
                        </label>
                        <input type="text" className="form-control" onChange={this._handleChangeFirstName} value={this.state.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">
                             lastName
                        </label>
                        <input type="text" className="form-control" onChange={this._handleChangeLastName} value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                             phone
                        </label>
                        <input type="number" className="form-control" onChange={this._handleChangePhone} value={this.state.phone}/>
                    </div>
                    <button className="btn btn-primary" type="submit" value="Soumettre" >Soumettre</button>
                </form>
             )
        }
        
    }
}


export default ContactForm
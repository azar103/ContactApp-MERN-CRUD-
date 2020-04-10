import React from 'react'
import axios from 'axios'
import ContactForm from '../ContactForm/ContactForm'
import Contact from '../Contact/Contact'


class ListContact extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state= {
            contacts: []
        }
    }

    componentDidMount() {
       axios.get('http://localhost:3000/api/contacts').then(
           (response) => {
               this.setState({
                   contacts: response.data
               })
           } 
       )
    }

    

    render() {
        return(
            <table className="table">
                <thead>
                <tr>  
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone</th>
                <th scope="col">#</th>
                </tr>  
                </thead>
                <tbody>
                {this.state.contacts.length > 0 && this.state.contacts.map((contact, index) => <Contact
                     key={index}
                     contact={contact}  
    
                 />)}
               </tbody>  
            </table>
        )
    }
}


export default ListContact
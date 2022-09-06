import Modal from 'react-bootstrap/Modal';
import React from "react";
import axios from 'axios';


class ModalBook extends React.Component{

  
handleData=(event)=>{

    event.preventDefault();
    const obj={

        title:event.target.title.value,
        description:event.target.bookdisc.value,
        status:event.target.status.value,
    }

    console.log(obj)
    axios
    .post('https://mohannad12.herokuapp.com/addbook',obj)
    .then(result=>{

        
        this.props.newData(result.data)

    })
}

    render(){



        return (

        <>
        <Modal show={this.props.show} onHide={this.props.closeShow}>
        <Modal.Header closeButton>
          <Modal.Title> Book Details  </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <form onSubmit={this.handleData}>
          <input type="text" name="title" placeholder='book name' />
          <br></br>
          <br></br>
          <input type="text" name="bookdisc" placeholder='book dic' />
          <br></br>
          <br></br>
          <input type="text" name="status" placeholder='bookstatus' />
          <br></br>
          <br></br>
          <button type='submit'>Add</button>

        </form>
        </Modal.Body>
        
        </Modal>
      </>
          )
      }
  }
  
  export default ModalBook ;
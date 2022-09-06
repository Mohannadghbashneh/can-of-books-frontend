import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

class UpdateBook extends React.Component{



    handleUp=(event)=>{
    event.preventDefault();
    const obj={
        id:this.props.itemData._id,
        title:event.target.title.value,
        description:event.target.bookdisc.value
       }

    axios
    .put(`https://mohannad12.herokuapp.com/updatebook/${obj.id}`,obj)
    .then(result=>{

        
        
       this.props.updatedData(result.data)
       
      
    })
 

}


render(){

    return(
                    <>

                    <Modal show={this.props.showupdate} onHide={this.props.showUpdateClose} >
                    <Modal.Header closeButton>
                    <Modal.Title> Book Details  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 

                     <Form onSubmit={this.handleUp}>
                     <Form.Group className="mb-3" controlId="formBasictext" >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Name" name='title'  defaultValue={this.props.itemData.title}/>
                    <Form.Text className="text-muted"  >
                    Book Title
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Discription </Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Discription" name='bookdisc' defaultValue={this.props.itemData.description}/>
                    <Form.Text className="text-muted"  >
                    Discription
                    </Form.Text>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" onClick={this.props.showUpdateClose} >
                    Update
                    </Button>
                    </Form>
                    </Modal.Body>
                    
                    </Modal>
                     </>

    )
}
}



export default UpdateBook;
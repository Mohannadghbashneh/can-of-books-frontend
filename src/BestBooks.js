import React from 'react';
import axios from 'axios';
import img from './images/book.jpeg';
import ModalBook  from './modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show:false,
      books: []
    }
  }



  componentDidMount=async()=>{

    await axios.get('http://localhost:3001/books')
    .then(result=>{

      this.setState({
        books:result.data
      })
      
      
    })
  }
  
 handeleclose=()=>{

  this.setState({
    show:false
  })

 } 


 handlebutton=()=>{

  this.setState({show:true})
  
 } 

 updateBooks=(data)=>{

  this.setState({
    books:data

  })

 }

 

 deleteHandle=(id)=>{
  
  
  axios
  .delete(`http://localhost:3001/deletebook/${id}`) 
  .then(result =>{
    this.setState({
      books:result.data
    })
    

 })}

 



  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <ModalBook newData={this.updateBooks} show={this.state.show}  closeShow={this.handeleclose} />

        

       

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Button variant="secondary"  onClick={this.handlebutton}>ADD YOUR FAV BOOK! </Button>

          
                  
                    {this.state.books.length ?  
                    
                    
                    <Carousel>
                      {this.state.books.map(item => (
                      <Carousel.Item>

                      
                        <img
                          className="d-block w-100"
                          src={img}
                          alt={item.title}
                          style={{height: 400 , width:100}}
                        />
                        
                        <Carousel.Caption>
                        
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        
                          <Button variant="danger"  onClick={()=>this.deleteHandle(item._id)}>Delete Book </Button>
                          
                        </Carousel.Caption>
                      </Carousel.Item>

                      
                     ) )}


            </Carousel>
                 
        : (
          <h3>No Books Found :(</h3>
        )}


      </>
    )
  }
}

export default BestBooks;
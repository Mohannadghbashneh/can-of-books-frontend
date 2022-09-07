import React from 'react';
import axios from 'axios';
import img from './images/book.jpeg';
import ModalBook  from './modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import UpdateBook from './update';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show:false,
      books: [],
      showupdate:false
    }
  }



  componentDidMount=async()=>{

    await axios.get('https://mohannad12.herokuapp.com/books')
    .then(result=>{

      this.setState({
        books:result.data
      })
      
      
    })
  }
  deleteHandle=(id)=>{
  
  
    axios
    .delete(`https://mohannad12.herokuapp.com/deletebook/${id}`) 
    .then(result =>{
      this.setState({
        books:result.data
      })
      
  
   })}



  
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

 
handleUpdate=()=>{


  this.setState({

    showupdate:true
  })
}
 
handleCloseUpdate=()=>{



  this.setState({

    showupdate:false
  })
}

 



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
                          style={{height: 400 , width:100}}/>
                      
                        <Carousel.Caption>
                        
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <p>{item.status}</p>
                          <UpdateBook showupdate={this.state.showupdate} updatedData={this.updateBooks}  itemData={item}  showUpdateClose={this.handleCloseUpdate }/>
                        
                          <Button variant="danger" style={{marginRight:20}} onClick={()=>this.deleteHandle(item._id)}>Delete Book </Button>
                          <Button variant="primary"  onClick={this.handleUpdate}>Update Info</Button>
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
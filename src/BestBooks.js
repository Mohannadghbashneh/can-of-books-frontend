import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css'



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () =>{
    axios
    .get(`http://localhost:3001/Books`)
    .then(result =>{
    
     
        this.setState({
          books:result.data
        })
     
     
     
    })
    .catch(err =>{
      console.log(err);
    })
  }


  render() {


    return (
      <div id = "MainDiv">
        

        {this.state.books.length ? (
<div id="myDiv" style={{width:"600px" }}>
<Carousel >
      <Carousel.Item>
        <img 
          className="d-block w-100"
         
          src="https://images-na.ssl-images-amazon.com/images/I/416WFGrlxBL._SX328_BO1,204,203,200_.jpg"
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> {this.state.books[0].title}</h3>
        
          <p >{this.state.books[0].description}</p>
          
          <h3 >{this.state.books[0].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641403203i/57945316.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{this.state.books[1].title}</h3>
          <p>{this.state.books[1].description}</p>
          <h3>{this.state.books[1].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/41Jt+uR7gAL.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{this.state.books[2].title}</h3>
          <p>{this.state.books[2].description}</p>
          <h3>{this.state.books[2].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
</div>



          
        ) : (
          <h3>The Books Collection Is Empty :(</h3>
        )}
      </div>
    )
  }
}

export default BestBooks;
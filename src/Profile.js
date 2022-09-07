    import Card from 'react-bootstrap/Card';
    // import "./styles/Profile.css";
    import React, { Component } from 'react';
    import { withAuth0 } from '@auth0/auth0-react';

    class Profile extends Component {
    render() {
        const { user } = this.props.auth0;
        console.log(user);
        return(
        <div>
        <Card id="innerCard" style={{ width: '18rem' }}>
        <Card.Img className="img-me" variant="top" src={user.picture} />
        <Card.Body>
        <Card.Title>
            <h6>NickName : {user.nickname} .</h6>
            </Card.Title>
        <Card.Text><h6>Email : {user.email} .</h6></Card.Text>
        <Card.Text><h6> 👋 Welcom 🙋: {user.nickname}.</h6></Card.Text>

        </Card.Body>
    </Card>
    </div>
    ) 
    
    }
    };

    export default withAuth0(Profile);


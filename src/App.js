import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Card} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.css'; //Import Bootstrap Required Css
import Button from 'react-bootstrap/Button' //Bootstrap Button
import axios from 'axios'


class App extends Component {

    state = {
        news: [],
        showBtn: true
      };

    getNews = () => {
      axios
      .get('https://newsapi.org/v2/top-headlines?country=ie&apiKey=a486387335cd46e0a3c0cb8614fdc4ef')
      .then(result => {
      
            this.setState({
              news: result.data.articles,
              showBtn: false
            });
            console.log(this.state.news);
      })
      .catch(error => {
        console.log(error);
      })      

    }

    render() {


    return (
      <div className="App">
        {this.state.showBtn ? 
        <Button className="getNews" onClick={this.getNews}>Get News</Button>
        : null }
        <Container fluid>
        <Row>
        {this.state.news.map(item => (
            <Col xs lg={3} key={item.title}>
              <Card style={{ width: '18rem' }} className="mx-auto shadow">
              <Card.Img variant="top" src={item.urlToImage} />
              <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
         
        ))}
        </Row>
        </Container>
      </div>
    )
 }
}

export default App;

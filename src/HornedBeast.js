import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 0,
    }
  }

  handleWaves = () => {
    this.setState({
      heart: this.state.heart + 1,
    })
  }
  render() {
    return (
      <>
      <Row md={3}>
        {Array.from({ length: 1 }).map((_, index) => (
          <Col lg={'auto'}>
            <Card style={{ width: '33rem' }} >
              <Card.Img onClick={this.handleWaves} src={this.props.image_url} alt={this.props.description} title={this.props.title} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>❤️:{this.state.heart}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
              </Card.Body>
            </Card>
        </Col>
        ))}
        </Row>
      </>
    )
  }
}

export default HornedBeast;
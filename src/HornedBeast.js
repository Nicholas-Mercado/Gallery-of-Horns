import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';


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
  
  handleBeastClick = () => {
    this.handleWaves();
    this.props.handleShowModal(this.props.beast);
  }

  render() {
    return (
      <>
       <Card style={{ width: '25rem' }} className="p-2 h-100" >
          <Card.Img onClick={this.handleBeastClick} src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title}/>
            <Card.Body>
              <Card.Title>{this.props.beast.title}</Card.Title>
              <Card.Text>❤️:{this.state.heart}</Card.Text>
              <Card.Text>{this.props.beast.description}</Card.Text>
            </Card.Body>
          </Card>
      </>
    )
  }
}

export default HornedBeast;
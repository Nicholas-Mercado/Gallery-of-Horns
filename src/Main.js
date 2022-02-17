import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
  render(){
    // let finalData = [];
    // this.props.data.forEach((hornsB, index) =>{
    //   finalData.push (
    //   )
    // })

    return(
      <main >
      <Row  xs={1} md={2} lg={3}>
        {this.props.data.map((hornsB,index) => (
          <Col key={index}>
        <HornedBeast
          beast={hornsB}
          handleShowModal={this.props.handleShowModal}
          />
          </Col>
        )
        )}
      </Row>
      </main>
    )
  }
}

export default Main;
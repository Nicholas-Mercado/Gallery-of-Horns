import React from "react";
import { Form, Container } from 'react-bootstrap';
import './filter.css';

class Filter extends React.Component{



  render(){
    
  
    return(
     <>
    <Container>
      <Form >
          <Form.Label ># of horns filter</Form.Label>
          <Form.Select onChange={this.props.handleSelect}>
            <option value={"All"}>All</option>
            <option value={"One"}>One</option>
            <option value={"Two"}>Two</option>
            <option value={"Three"}>Three</option>
            <option value={"One-Hundred"}>One Hundred</option>
          </Form.Select>
      </Form>
    </Container>
     </> 

);

  }
}

export default Filter;
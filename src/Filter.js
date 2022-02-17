import React from "react";
// import {ListGroup} from 'react-bootstrap';


class Filter extends React.Component{



  render(){
    
  
    return(
     <>

      <form>
        <fieldset>
          <legend># of horns filter</legend>
          <select onChange={this.props.handleSelect}>
            <option value={"All"}>All</option>
            <option value={"One"}>One</option>
            <option value={"Two"}>Two</option>
            <option value={"Three"}>Three</option>
            <option value={"One-Hundred"}>One Hundred</option>
          </select>
        </fieldset>
      </form>
     </> 

);

  }
}

export default Filter;
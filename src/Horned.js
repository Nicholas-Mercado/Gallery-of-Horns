import React from "react";
import './Horned.css';

class HornedBeast extends React.Component{
  // how to setup state component
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     waves: 0, we dont need this
  //   }
  // }

  //   handleWaves = () => {
  //     this.setState({
  //       waves: this.state.waves + 1,
  //     })
  //   
  render(){

    return(
      <>
        <article> 
        
          <h2>{this.props.title}</h2>
          {/* onClick={this.handleWaves}  */}
          {/* <p>emoji{this.state.waves)</p> */}
          <img src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>
          <p>{this.props.description}</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;